import React, {createContext, useState, useEffect} from 'react';

import api from '../services/api';

export const CategoryContext = createContext();

export const CategoryProvider = ({children}) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await api.get('/categories');
        setCategories(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchCategories();
  }, [categories]);

  const createCategory = async (formData, reset, setloading) => {
    setloading(true);
    try {
      const response = await api.post('/categories', formData);
      setCategories([...categories, response.data]);
      reset();
    } catch (error) {
      console.error(error);
    } finally {
      setloading(false);
    }
  };

  return (
    <CategoryContext.Provider value={{categories, createCategory}}>
      {children}
    </CategoryContext.Provider>
  );
};
