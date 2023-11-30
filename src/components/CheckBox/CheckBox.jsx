import {theme} from '../../global/styles/theme';

import React, {useState} from 'react';

import {View, Text, TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

export const Checkbox = ({text}) => {
  const [checked, setChecked] = useState(false);

  const toggleCheckbox = () => {
    setChecked(prevChecked => !prevChecked);
  };

  return (
    <TouchableOpacity onPress={toggleCheckbox}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Icon
          name={checked ? 'check-box' : 'check-box-outline-blank'}
          size={24}
          color={checked ? theme.checkBox.backgroundcolor : 'blue'}
        />
        <Text style={{marginLeft: 8}}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};
