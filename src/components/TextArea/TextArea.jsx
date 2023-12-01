import {styles} from './style';
import {theme} from '../../global/styles/theme';

import React, {useState} from 'react';

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
  const [isFocused, setIsFocused] = useState(false);

  const borderColor = isError ? theme.input.error : theme.input.borderColor;
  const focusedBorderColor = theme.input.onFocus;

  return (
    <View style={[styles.inputContainer, containerStyle]}>
      <Text style={styles.label}>{label}</Text>
      <View style={{borderColor}}>
        <TextInput
          style={[
            styles.textInput,
            {borderColor: isFocused ? focusedBorderColor : borderColor},
            {paddingTop: 10},
          ]}
          placeholderTextColor={placeholderTextColor}
          value={value}
          onChangeText={onChangeText}
          multiline
          placeholder={placeholder}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
      </View>
      {isError && errorMessage && (
        <Text style={styles.errorMessage}>{errorMessage}</Text>
      )}
    </View>
  );
};
