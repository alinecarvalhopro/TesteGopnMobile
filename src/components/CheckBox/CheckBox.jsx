import {theme} from '../../global/styles/theme';

import React from 'react';

import {View, Text, TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

export const Checkbox = ({ text, isChecked, handleCheckboxToggle }) => {
  return (
    <TouchableOpacity onPress={handleCheckboxToggle}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Icon
          name={isChecked ? 'check-box' : 'check-box-outline-blank'}
          size={24}
          color={isChecked ? theme.checkBox.backgroundcolor : 'blue'}
        />
        <Text style={{ marginLeft: 8 }}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};