import {styles} from './style';
import {theme} from '../../global/styles/theme';

import React, {useState, useContext} from 'react';

import {Text, View, Image, TouchableOpacity, ScrollView} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import {useForm, Controller} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';

import {registerSchema} from '../../schema/userRegister.schema';

import {UserContext} from '../../context/UserContext';

import Feather from 'react-native-vector-icons/Feather';

import {Input} from '../../components/Input/Input';
import {Button} from '../../components/Button/Button';
import {Checkbox} from '../../components/CheckBox/CheckBox';

export const Register = () => {
  const [loading, setLoading] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [showWarning, setShowWarning] = useState(false);

  const {submitRegister} = useContext(UserContext);

  const navigation = useNavigation();

  const {
    control,
    handleSubmit,
    formState: {errors},
    reset,
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  const submit = formData => {
    if (!isChecked) {
      setShowWarning(true);
      return;
    }
    setShowWarning(false);
    submitRegister(formData, setLoading, reset);
  };

  const handleCheckboxToggle = () => {
    setIsChecked(prevChecked => !prevChecked);
    setShowWarning(false);
  };

  return (
    <ScrollView style={styles.registerContainer}>
      <View style={styles.registerContent}>
        <View style={styles.header}>
          <Image
            style={styles.logo}
            source={require('../../images/png/logo.png')}
          />
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Feather
              name="arrow-left-circle"
              size={28}
              color={theme.header.icon}
              style={styles.iconGoBack}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.title}>Dados de acesso</Text>
        <Controller
          control={control}
          render={({field}) => (
            <Input
              value={field.value}
              errorMessage={errors.name?.message}
              isError={errors.name?.message}
              placeholder="Digite seu nome"
              label="Nome"
              onChangeText={value => {
                field.onChange(value);
              }}
              containerStyle={styles.input}
            />
          )}
          name="name"
          defaultValue=""
        />
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
              placeholder="Insira sua senha"
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
        <Controller
          control={control}
          render={({field}) => (
            <Input
              value={field.value}
              errorMessage={errors.confirmPassword?.message}
              isError={errors.confirmPassword?.message}
              secureTextEntry
              placeholder="Confirme sua senha"
              label="Confirmar senha"
              onChangeText={value => {
                field.onChange(value);
              }}
              containerStyle={styles.input}
            />
          )}
          name="confirmPassword"
          defaultValue=""
        />
        <Text style={styles.titlePrivacyPolicy}>
          Termos de uso e privacidade
        </Text>
        <View style={styles.privatePolicyBox}>
          <Checkbox
            text="Ao clicar neste botão, eu concordo com os termos de uso e privacidade da nossa empresa."
            isChecked={isChecked}
            handleCheckboxToggle={handleCheckboxToggle}
          />
        </View>
        <TouchableOpacity>
          <Text style={styles.privatePolicyNavigate}>
            Termos de uso e privacidade
          </Text>
        </TouchableOpacity>
        {showWarning && !isChecked && (
          <Text style={styles.errorPrivatePolicy}>
            Para efetuar o cadastro, é necessário aceitar os termos de uso e
            privacidade
          </Text>
        )}
        <Button
          additionalStyle={styles.button}
          loading={loading}
          title="Cadastrar"
          type="submit"
          height={48}
          marginTop={20}
          onPress={handleSubmit(submit)}
        />
      </View>
      <View style={{height: 20}}></View>
    </ScrollView>
  );
};
