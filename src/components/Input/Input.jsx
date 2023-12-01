import {styles} from './style';
import {theme} from '../../global/styles/theme';

import React, {useState} from 'react';
import {Text, View, TextInput} from 'react-native';

import Feather from 'react-native-vector-icons/Feather';

export const Input = ({
  label,
  value,
  containerStyle,
  placeholder,
  placeholderTextColor,
  errorMessage,
  onChangeText,
  secureTextEntry,
  isError = false,
}) => {
  const [currentSecure, setCurrentSecure] = useState(!!secureTextEntry);
  const [isFocused, setIsFocused] = useState(false);

  const handleOnPressEye = () => {
    setCurrentSecure(current => !current);
  };

  const borderColor = isError ? theme.input.error : theme.input.borderColor;
  const focusedBorderColor = theme.input.onFocus;

  return (
    <View style={[styles.inputContainer, containerStyle]}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={[
          styles.textInput,
          {borderColor: isFocused ? focusedBorderColor : borderColor},
        ]}
        placeholderTextColor={placeholderTextColor}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={currentSecure}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      {secureTextEntry && (
        <Feather
          onPress={handleOnPressEye}
          name={currentSecure ? 'eye' : 'eye-off'}
          size={28}
          color={isFocused ? theme.input.onFocus : theme.input.eyeMask}
          style={styles.eyeMask}
        />
      )}
      {isError && errorMessage && (
        <Text style={styleInput.errorMessage}>{errorMessage}</Text>
      )}
    </View>
  );
};
