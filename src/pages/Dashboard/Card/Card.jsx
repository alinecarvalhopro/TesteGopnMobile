import {styles} from './style';

import {View, Text} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import {Button} from '../../../components/Button/Button';

export const Card = ({title, text}) => {
  const navigation = useNavigation();
  return (
    <View>
      <View style={styles.cardContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.title}>{title}</Text>
          <Button
            title="Editar"
            aditionalStyle={styles.button}
            onPress={() => navigation.navigate('UpdateCard')}
          />
        </View>
        <Text style={styles.text}>{text}</Text>
      </View>
    </View>
  );
};
