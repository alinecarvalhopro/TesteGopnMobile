import {styles} from './style';
import {theme} from '../../global/styles/theme';

import React from 'react';

import {View, Image, TouchableOpacity} from 'react-native';

import { useNavigation } from '@react-navigation/native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export const Dashboard = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.dashboardContainer}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <MaterialIcons
            name="notes"
            size={28}
            color={theme.header.icon}
            style={styles.eyeMask}
          />
        </TouchableOpacity>
        <Image
          style={styles.logo}
          source={require('../../images/png/logo.png')}
        />
        <MaterialIcons
          onPress={() => console.log('open modal')}
          name="account-circle"
          size={40}
          color={theme.header.icon}
          style={styles.eyeMask}
        />
      </View>
    </View>
  );
};
