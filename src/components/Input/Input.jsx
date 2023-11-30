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

  const handleOnPressEye = () => {
    setCurrentSecure(current => !current);
  };

  const borderColor = isError ? theme.input.error : theme.input.borderColor;

  return (
    <View style={[styles.inputContainer, containerStyle]}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={[styles.textInput, {borderColor}]}
        placeholderTextColor={placeholderTextColor}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={currentSecure}
      />
      {secureTextEntry && (
        <Feather
          onPress={handleOnPressEye}
          name={currentSecure ? 'eye' : 'eye-off'}
          size={28}
          color={theme.input.eyeMask}
          style={styles.eyeMask}
        />
      )}
      {isError && errorMessage && (
        <Text style={styleInput.errorMessage}>{errorMessage}</Text>
      )}
    </View>
  );
};
