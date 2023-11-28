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
      {loading ? (
        <ActivityIndicator color={theme.button.text} size={28} />
      ) : (
        <Text style={styles.text}>{title}</Text>
      )}
    </>
  );

  return (
    <TouchableOpacity
      style={[
        loading ? styles.disabledButton : styles.button,
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
