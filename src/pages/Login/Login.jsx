import {styles} from './style';

import React, {useState, useContext} from 'react';

import {Text, View, Image, Keyboard} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import {useForm, Controller} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';

import {schema} from '../../schema/userLogin.schema';

import {UserContext} from '../../context/UserContext';

import {Input} from '../../components/Input/Input';
import {Button} from '../../components/Button/Button';

export const Login = () => {
  const [loading, setLoading] = useState(false);
  const {submitLogin} = useContext(UserContext);

  const navigation = useNavigation();

  const {
    control,
    handleSubmit,
    formState: {errors},
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const submit = formData => {
    submitLogin(formData, setLoading, reset);
    Keyboard.dismiss();
  };

  return (
    <View style={styles.loginContainer}>
      <Image
        style={styles.logo}
        source={require('../../images/png/logo.png')}
      />
      <Text style={styles.title}>Dados de acesso</Text>
      <Controller
        control={control}
        render={({field}) => (
          <Input
            value={field.value}
            errorMessage={errors.email?.message}
            isError={errors.email?.message}
            placeholder="Insira o seu e-mail"
            label="E-mail"
            onChangeText={value => {
              field.onChange(value);
            }}
            containerStyle={styles.input}
          />
        )}
        name="email"
        defaultValue=""
      />
      <Controller
        control={control}
        render={({field}) => (
          <Input
            value={field.value}
            errorMessage={errors.password?.message}
            isError={errors.password?.message}
            secureTextEntry
            placeholder="Insira a sua senha"
            label="Senha"
            onChangeText={value => {
              field.onChange(value);
            }}
            containerStyle={styles.input}
          />
        )}
        name="password"
        defaultValue=""
      />
      <Button
        aditionalStyle={styles.button}
        loading={loading}
        title="Entrar"
        type="submit"
        onPress={handleSubmit(submit)}
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
