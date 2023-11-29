import {styles} from './style';
import {theme} from '../../global/styles/theme';

import React from 'react';

import {Text, View, TextInput} from 'react-native';

export const TextArea = ({
  label,
  value,
  containerStyle,
  placeholderTextColor,
  placeholder,
  errorMessage,
  onChangeText,
  isError = false,
}) => {
  const borderColor = isError ? theme.input.error : theme.input.borderColor;

  return (
    <View style={[styles.inputContainer, containerStyle]}>
      <Text style={styles.label}>{label}</Text>
      <View style={{borderColor, borderBottomWidth: 1}}>
        <TextInput
          style={[styles.textInput, {paddingTop: 10}]}
          placeholderTextColor={placeholderTextColor}
          value={value}
          onChangeText={onChangeText}
          multiline
          placeholder={placeholder}
        />
      </View>
      {isError && errorMessage && (
        <Text style={styles.errorMessage}>{errorMessage}</Text>
      )}
    </View>
  );
};
