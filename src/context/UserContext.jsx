import React, {createContext, useState} from 'react';

import {useNavigation} from '@react-navigation/native';

import api from '../services/api';

import AsyncStorage from '@react-native-async-storage/async-storage';

export const UserContext = createContext();

export const UserProvider = ({children}) => {
  const [user, setUser] = useState(null);

  const navigation = useNavigation();

  const submitLogin = async (formData, setLoading, reset) => {
    setLoading(true);
    try {
      const {data} = await api.post('login', formData);
      await AsyncStorage.setItem('@TOKEN', data.accessToken);
      await AsyncStorage.setItem('@USERID', String(data.user.id));
      setUser(data.user);
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
    setUser(null);
    navigation.navigate('Login');
  };

  const submitRegister = async (formData, setLoading, reset) => {
    setLoading(true);
    try {
      await api.post('users', formData); 
      setTimeout(() => {
        console.log('tudo certo')
        navigation.navigate('Login');
      }, 3000);
      reset();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <UserContext.Provider value={{user, submitLogin, logout, submitRegister}}>
      {children}
    </UserContext.Provider>
  );
};
