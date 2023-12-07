import {styles} from './style';
import { theme } from '../../global/styles/theme';

import React, {useEffect} from 'react';

import {View, Text} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import Feather from 'react-native-vector-icons/Feather';

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
