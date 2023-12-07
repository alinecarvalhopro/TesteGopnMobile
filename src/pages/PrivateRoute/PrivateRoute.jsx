import {styles} from './style';

import React, {useContext, useEffect} from 'react';
import {View, Image} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import {useNavigation} from '@react-navigation/native';
import { UserContext } from '../../context/UserContext';

export const PrivateRoute = () => {
  const {setUserId} = useContext(UserContext);

  const navigation = useNavigation();

  useEffect(() => {
    const checkUser = async () => {
      try {
        const userData = await AsyncStorage.getItem('@USERID');
        if (userData) {
          const id = JSON.parse(userData);
          setUserId(id)
        }

        setTimeout(() => {  
          if (userData) {
            navigation.navigate('DashboardDrawer');
          } else {
            navigation.navigate('Login');
          }
        }, 2000);

      } catch (error) {
        console.error(error);
      }
    };

    checkUser();
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image source={require('../../images/png/logo.png')} />
    </View>
  );
};
