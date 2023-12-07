import React, {createContext, useState} from 'react';

import {useNavigation} from '@react-navigation/native';

import api from '../services/api';

import AsyncStorage from '@react-native-async-storage/async-storage';

export const UserContext = createContext();

export const UserProvider = ({children}) => {
  const [userId, setUserId] = useState(null);

  const navigation = useNavigation();

  const submitLogin = async (formData, setLoading, reset) => {
    setLoading(true);
    try {
      const {data} = await api.post('login', formData);
      await AsyncStorage.setItem('@TOKEN', data.token);
      await AsyncStorage.setItem('@USERID', String(data.user.id));
      setUserId(data.user.id);
      navigation.navigate('DashboardDrawer');
      reset();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    AsyncStorage.removeItem('@TOKEN');
    AsyncStorage.removeItem('@USERID');
    setUserId(null);
    navigation.navigate('Login');
  };

  const submitRegister = async (formData, setLoading, reset) => {
    setLoading(true);
    try {
      await api.post('users', formData);
      navigation.navigate('RegisteredSuccessfully');
      reset();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <UserContext.Provider
      value={{userId, setUserId, submitLogin, logout, submitRegister}}>
      {children}
    </UserContext.Provider>
  );
};
