import {styles} from './style';
import {theme} from '../../global/styles/theme';

import React, {useContext} from 'react';

import {View, Image, TouchableOpacity, Text, ScrollView} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {Card} from './Card/Card';
import {UserContext} from '../../context/UserContext';
import {PlaybookContext} from '../../context/PlaybookContext';

export const Dashboard = () => {
  const {user} = useContext(UserContext);
  const {playbooks} = useContext(PlaybookContext);

  const navigation = useNavigation();

  return (
    <ScrollView style={styles.dashboardContainer}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <MaterialIcons
            name="notes"
            size={28}
            color={theme.header.icon}
            style={styles.eyeMask}
          />
        </TouchableOpacity>
        <Image
          style={styles.logo}
          source={require('../../images/png/logo.png')}
        />
        <MaterialIcons
          name="account-circle"
          size={40}
          color={theme.header.icon}
          style={styles.eyeMask}
        />
      </View>
      <View style={styles.sectionsBox}>
        <Text style={styles.title}>Playbooks</Text>
        <View style={styles.categoriesSection}>
          <Text style={styles.subtitle}>Categorias</Text>
          <TouchableOpacity
            style={styles.addCategoryButton}
            onPress={() => console.log('Add category')}>
            <MaterialIcons
              name="add"
              size={28}
              color={theme.text.actionText}
              style={styles.addCategoryIconButton}
            />
            <Text style={styles.addCategoryTextButton}>
              Adicionar nova categoria
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <Card
            title="Nossa Metodologia"
            text="Enteder a dor ou poblema que o cliente quer resolver;
                  Mostrar os módulos que possam resolver o poblema do cliente;
                  Montar a proposta comercial;
                  Apresentar a proposta com a solução;
                  Fazer follow up, após a proposta ser apresentada."
          />
        </View>
      </View>
      <TouchableOpacity
        style={styles.floatButton}
        onPress={() => navigation.navigate('CreateCard')}>
        <MaterialIcons name="add" size={35} color={theme.button.text} />
      </TouchableOpacity>
    </ScrollView>
  );
};
