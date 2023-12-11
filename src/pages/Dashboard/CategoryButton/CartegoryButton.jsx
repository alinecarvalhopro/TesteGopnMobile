import {styles} from './style';

import React from 'react';

import {TouchableOpacity, Text} from 'react-native';

export const CategoryButton = ({name, id}) => {
  return (
    <TouchableOpacity key={id} style={styles.button}>
      <Text style={styles.text}>{name}</Text>
    </TouchableOpacity>
  );
};
