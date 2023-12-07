import React, {createContext, useState, useEffect} from 'react';

import {Keyboard} from 'react-native';

import api from '../services/api';

export const CategoryContext = createContext();

export const CategoryProvider = ({children}) => {
  const [categories, setCategories] = useState([]);

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
      const newcategory = Array.isArray(categories) ? categories : [];
      setCategories([...newcategory, response.data]);
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
      value={{categories, createCategory, fetchCategories}}>
      {children}
    </CategoryContext.Provider>
  );
};
