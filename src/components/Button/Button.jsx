import {styles} from './style';
import {theme} from '../../global/styles/theme';

import React from 'react';
import {Text, TouchableOpacity, ActivityIndicator} from 'react-native';

export const Button = ({
  title,
  type,
  loading,
  disabled,
  margin,
  height,
  width,
  onPress,
  ...props
}) => {
  const handleOnPress = () => {
    if (!loading && !disabled && onPress) {
      onPress();
    }
  };

  const renderText = () => (
    <>
      <Text style={styles.text}>{title}</Text>
      {loading && <ActivityIndicator color={theme.button.text} />}
    </>
  );

  return (
    <TouchableOpacity
      style={[
        loading ? styles.button : styles.disabledButton,
        {width: width, height: height, margin: margin},
      ]}
      {...props}
      margin={margin}
      width={width}
      height={height}
      type={type}
      onPress={handleOnPress}
      disabled={loading || disabled}>
      {renderText()}
    </TouchableOpacity>
  );
};
