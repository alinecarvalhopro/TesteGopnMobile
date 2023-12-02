import {styles} from './style';

import React, {useEffect} from 'react';
import {View, Image, Text} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import {useNavigation} from '@react-navigation/native';

import Feather from 'react-native-vector-icons/Feather';
import { theme } from '../../global/styles/theme';

export const RegisteredSuccessfully = () => {
  const navigation = useNavigation();
  useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Login');
        }, 3000);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Feather
        name="check-circle"
        size={100}
        color={theme.registredSuccessfullyPage.icon}
      />
      <Text style={styles.text}>Cadastro realizado com sucesso</Text>
    </View>
  );
};
