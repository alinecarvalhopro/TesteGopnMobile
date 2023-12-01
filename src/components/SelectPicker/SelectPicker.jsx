import {styles} from './style';
import {theme} from '../../global/styles/theme';

import React, {useState} from 'react';

import {View, Text} from 'react-native';

import RNPickerSelect from 'react-native-picker-select';

export const SelectPicker = ({label, selectedValue, setSelectedValue}) => {
  const options = [
    {label: 'Option 1', value: 'option1'},
    {label: 'Option 2', value: 'option2'},
    {label: 'Option 3', value: 'option3'},
  ];

  return (
    <View style={styles.selectPickerContainer}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.selectPicker}>
        <RNPickerSelect
          placeholder={{
            label: 'Selecione',
            value: null,
            color: theme.input.placeholder,
          }}
          items={options}
          onValueChange={value => setSelectedValue(value)}
          value={selectedValue}
        />
      </View>
    </View>
  );
};
