import {styles} from './style';
import {theme} from '../../global/styles/theme';

import React from 'react';

import {Text, View, TouchableOpacity} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Button} from '../../components/Button/Button';

export const CreateCard = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.createCardContainer}>
      <View style={styles.header}>
        <View style={styles.titleIconBox}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <MaterialIcons
              name="arrow-back"
              size={28}
              color={theme.header.icon}
              style={styles.eyeMask}
            />
          </TouchableOpacity>
          <Text style={styles.titlePage}>Editar Card</Text>
        </View>
        <Button title="Editar" width={80} height={35} />
      </View>
    </View>
  );
};
