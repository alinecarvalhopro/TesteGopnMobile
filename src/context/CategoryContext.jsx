import React, {createContext, useState, useEffect} from 'react';

import {Keyboard} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import api from '../services/api';

export const CategoryContext = createContext();

export const CategoryProvider = ({children}) => {
  const [categories, setCategories] = useState([]);

  const navigation = useNavigation();

  const fetchCategories = async () => {
    try {
      const response = await api.get('/categories');
      setCategories(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchCategories();
  }, []);

  const createCategory = async (formData, reset, setloading) => {
    setloading(true);
    try {
      const response = await api.post('/categories', formData);
      console.log(response.data)
      setCategories([...categories, response.data]);
      // setCategories(prevCategories => {
      //   return [...prevCategories, response.data];
      // });
      reset();
      Keyboard.dismiss();
      // fetchCategories();
      // navigation.navigate('DashboardDrawer');
    } catch (error) {
      console.error(error);
    } finally {
      setloading(false);
    }
  };

  return (
    <CategoryContext.Provider
      value={{categories, createCategory, fetchCategories}}>
      {children}
    </CategoryContext.Provider>
  );
};
