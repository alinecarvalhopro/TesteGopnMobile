import {styles} from './style';

import React, {useState} from 'react';

import {Text, View, Image} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import {Input} from '../../components/Input/Input';
import {Button} from '../../components/Button/Button';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  const handleEmail = event => {
    setEmail(event.nativeEvent);
    setErrorMessage('');
  };

  const handlePassword = event => {
    setPassword(event.nativeEvent);
    setErrorMessage('');
  };

  return (
    <View style={styles.loginContainer}>
      <Image
        style={styles.logo}
        source={require('../../images/png/logo.png')}
      />
      <Text style={styles.title}>Dados de acesso</Text>
      <Input
        value={email}
        errorMessage={errorMessage}
        placeholder="Insira o seu e-mail"
        label="E-mail"
        onChangeText={handleEmail}
        containerStyle={styles.input}
      />
      <Input
        value={password}
        errorMessage={errorMessage}
        secureTextEntry
        placeholder="Insira a sua senha"
        label="Senha"
        onChangeText={handlePassword}
        containerStyle={styles.input}
      />
      <Button
        aditionalStyle={styles.button}
        loading={loading}
        title="Entrar"
        onPress={() => navigation.navigate('DashboardDrawer')}
      />
      <Text style={styles.textDetail}>Ainda não tem cadastro?</Text>
      <Button
        aditionalStyle={styles.button}
        title="Cadastrar"
        onPress={() => navigation.navigate('Register')}
      />
    </View>
  );
};
