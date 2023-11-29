import {styles} from './style';

import React, {useState} from 'react';

import {Text, View, Image, TouchableOpacity} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {Input} from '../../components/Input/Input';
import {Button} from '../../components/Button/Button';
import {Checkbox} from '../../components/CheckBox/CheckBox';
import {theme} from '../../global/styles/theme';

export const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  const handleName = event => {
    setName(event.nativeEvent);
    setErrorMessage('');
  };

  const handleEmail = event => {
    setEmail(event.nativeEvent);
    setErrorMessage('');
  };

  const handlePassword = event => {
    setPassword(event.nativeEvent);
    setErrorMessage('');
  };

  const handleConfirmPassword = event => {
    setConfirmPassword(event.nativeEvent);
    setErrorMessage('');
  };

  return (
    <View style={styles.registerContainer}>
      <View style={styles.header}>
        <Image
          style={styles.logo}
          source={require('../../images/png/logo.png')}
        />
        <TouchableOpacity>
          <MaterialIcons
            onPress={() => navigation.goBack()}
            name="arrow-back"
            size={30}
            color={theme.header.icon}
            style={styles.iconGoBack}
          />
        </TouchableOpacity>
      </View>
      <Text style={styles.title}>Dados de acesso</Text>
      <Input
        value={name}
        errorMessage={errorMessage}
        placeholder="Insira o seu nome"
        label="Nome"
        onChangeText={handleName}
         containerStyle={styles.input}
      />
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
        placeholder="Insira uma senha"
        label="Senha"
        onChangeText={handlePassword}
         containerStyle={styles.input}
      />
      <Input
        value={confirmPassword}
        errorMessage={errorMessage}
        secureTextEntry
        placeholder="Confirme sua senha"
        label="Confirme a senha"
        onChangeText={handleConfirmPassword}
        containerStyle={styles.input}
      />
      <Text style={styles.titlePrivacyPolicy}>Termos de uso e privacidade</Text>
      <View style={styles.privatePolicyBox}>
        <Checkbox
          text="Ao clicar neste botão, eu concordo com os termos de uso e privacidade
          da nossa empresa."
        />
      </View>
      <TouchableOpacity>
        <Text style={styles.privatePolicyNavigate}>
          Termos de uso e privacidade
        </Text>
      </TouchableOpacity>
      <Button
        aditionalStyle={styles.button}
        title="Cadastrar"
        loading={loading}
      />
    </View>
  );
};
