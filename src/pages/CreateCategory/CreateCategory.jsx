import {styles} from './style';
import {theme} from '../../global/styles/theme';

import React, {useState, useContext} from 'react';

import {Text, View, TouchableOpacity} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import {Controller, useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';

import {createCategorySchema} from '../../schema/categoryCreate.schema';

import {CategoryContext} from '../../context/CategoryContext';
import {UserContext} from '../../context/UserContext';

import Feather from 'react-native-vector-icons/Feather';

import {Button} from '../../components/Button/Button';
import {Input} from '../../components/Input/Input';

export const CreateCategory = () => {
  const [loading, setLoading] = useState(false);

  const {userId} = useContext(UserContext);
  const {createCategory} = useContext(CategoryContext);

  const navigation = useNavigation();

  const {
    control,
    handleSubmit,
    formState: {errors},
    reset,
  } = useForm({
    resolver: yupResolver(createCategorySchema),
  });

  const onSubmit = formData => {
    const categoryData = {
      ...formData,
      userId: userId,
    };
    createCategory(categoryData, reset, setLoading);
  };

  return (
    <View style={styles.createCardContainer}>
      <View style={styles.header}>
        <View style={styles.titleIconBox}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Feather
              name="arrow-left-circle"
              size={28}
              color={theme.header.icon}
              style={styles.eyeMask}
            />
          </TouchableOpacity>
          <Text style={styles.titlePage}>Criar Categoria</Text>
        </View>
        <Button
          title="Criar"
          aditionalStyle={styles.button}
          loading={loading}
          type="submit"
          onPress={handleSubmit(onSubmit)}
        />
      </View>
      <View style={styles.formBox}>
        <Controller
          control={control}
          render={({field}) => (
            <Input
              value={field.value}
              errorMessage={errors.name?.message}
              isError={errors.name?.message}
              placeholder="Insira um nome"
              label="Nome"
              onChangeText={field.onChange}
              containerStyle={styles.input}
            />
          )}
          name="name"
          defaultValue=""
        />
      </View>
    </View>
  );
};
