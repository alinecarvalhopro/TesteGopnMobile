import {styles} from './style';
import {theme} from '../../global/styles/theme';

import React, {useState, useContext, useEffect} from 'react';

import {Text, View, TouchableOpacity} from 'react-native';

import {useNavigation, useRoute} from '@react-navigation/native';

import {Controller, useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';

import { updateCardSchema } from '../../schema/playbookUpdate.schema';

import {PlaybookContext} from '../../context/PlaybookContext';
import {UserContext} from '../../context/UserContext';

import Feather from 'react-native-vector-icons/Feather';

import {Button} from '../../components/Button/Button';
import {SelectPicker} from '../../components/SelectPicker/SelectPicker';
import {Input} from '../../components/Input/Input';
import {TextArea} from '../../components/TextArea/TextArea';

export const UpdateCard = () => {
  const [loading, setLoading] = useState(false);
  const [selectedValue, setSelectedValue] = useState(null);

  const {userId} = useContext(UserContext);
  const {playbooks, updatePlaybook} = useContext(PlaybookContext);

  const navigation = useNavigation();
  const route = useRoute();

  const { control, handleSubmit, setValue, formState: { errors }, reset } = useForm({
    resolver: yupResolver(updateCardSchema),
  });

  const { playbookId } = route.params;
  const playbookToEdit = playbooks.find(playbook => playbook.id === playbookId);

  useEffect(() => {
    if (playbookToEdit) {
      setValue('name', playbookToEdit.name);
      setValue('description', playbookToEdit.description);
      setSelectedValue(playbookToEdit.categoryId);
    }
  }, [playbookToEdit]);

  const onSubmit = async formData => {
    const formDataWithCategoryAndUserId = {
      ...formData,
      categoryId: selectedValue,
      userId: userId,
    };

    try {
      setLoading(true);
      await updatePlaybook(playbookId, formDataWithCategoryAndUserId);
      reset(); 
      navigation.goBack();
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
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
          <Text style={styles.titlePage}>Editar Card</Text>
        </View>
        <Button title="Editar" aditionalStyle={styles.button} loading={loading}
          type="submit"
          onPress={handleSubmit(onSubmit)} />
      </View>
      <View style={styles.formBox}>
        <Controller
          control={control}
          render={({field}) => (
            <Input
              value={field.value}
              errorMessage={errors.name?.message}
              placeholder="Insira um nome"
              label="Nome"
              onChangeText={field.onChange}
              containerStyle={styles.input}
            />
          )}
          name="name"
          defaultValue=""
        />
        <SelectPicker
          label="Categoria"
          selectedValue={selectedValue}
          setSelectedValue={setSelectedValue}
        />
        <Controller
          control={control}
          render={({field}) => (
            <TextArea
              value={field.value}
              errorMessage={errors.description?.message}
              placeholder="Escreva algo"
              label="Texto"
              onChangeText={field.onChange}
              containerStyle={styles.textArea}
            />
          )}
          name="description"
          defaultValue=""
        />
      </View>
      </View>
  );
};
