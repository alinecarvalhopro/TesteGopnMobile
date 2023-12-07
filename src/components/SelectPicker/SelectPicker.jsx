import {styles} from './style';
import {theme} from '../../global/styles/theme';

import React, {useContext} from 'react';

import {View, Text} from 'react-native';

import RNPickerSelect from 'react-native-picker-select';

import {CategoryContext} from '../../context/CategoryContext';

export const SelectPicker = ({label, selectedValue, setSelectedValue}) => {
  const {categories} = useContext(CategoryContext);

  const pickerOptions = categories.map(option => ({
    label: option.name,
    value: option.id,
    key: option.id,
  }));

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
          items={pickerOptions}
          onValueChange={value => setSelectedValue(value)}
          value={selectedValue}
        />
      </View>
    </View>
  );
};
