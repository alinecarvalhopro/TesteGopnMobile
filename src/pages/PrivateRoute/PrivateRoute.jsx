import {styles} from './style';

import React, {useEffect} from 'react';
import {View, Image} from 'react-native';

import {useNavigation} from '@react-navigation/native';

export const PrivateRoute = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.navigate('Login');
    }, 3000);

    return () => clearTimeout(timeout);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image source={require('../../images/png/logo.png')} />
    </View>
  );
};
