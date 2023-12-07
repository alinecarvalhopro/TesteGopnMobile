import {styles} from './style';

import React from 'react';

import {TouchableOpacity, Text} from 'react-native';

export const CategoryButton = ({name}) => {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.text}>{name}</Text>
    </TouchableOpacity>
  );
};
