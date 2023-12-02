import {styles} from './style';

import React, {useEffect} from 'react';
import {View, Image} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import {useNavigation} from '@react-navigation/native';

export const PrivateRoute = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const checkUser = async () => {
      try {
        const storedUser = await AsyncStorage.getItem('@USERID');
        setTimeout(() => {
          
          if (storedUser) {
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
