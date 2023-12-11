import React, {createContext, useState, useContext} from 'react';

import {Keyboard} from 'react-native';

import api from '../services/api';

import {UserContext} from './UserContext';

export const CategoryContext = createContext();

export const CategoryProvider = ({children}) => {
  const [categories, setCategories] = useState([]);

  const {userId} = useContext(UserContext);

  const getCategoriesByUser = async userId => {
    try {
      const response = await api.get(`/users/${userId}/categories`);
      setCategories(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const createCategory = async (formData, reset, setloading) => {
    setloading(true);
    try {
      const response = await api.post('/categories', formData);
      // const newcategory = Array.isArray(categories) ? categories : [];
      // setCategories([...newcategory, response.data]);
      if (!Array.isArray(categories)) {
        setCategories(categories);
      } else {
        setCategories([...categories, response.data]);
      }
      getCategoriesByUser(userId);
      reset();
      Keyboard.dismiss();
    } catch (error) {
      console.error(error);
    } finally {
      setloading(false);
    }
  };

  return (
    <CategoryContext.Provider
      value={{categories, createCategory, getCategoriesByUser}}>
      {children}
    </CategoryContext.Provider>
  );
};
