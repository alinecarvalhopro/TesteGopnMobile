import {styles} from './style';
import {theme} from '../../global/styles/theme';

import React, {useContext, useEffect} from 'react';

import {View, Image, TouchableOpacity, Text, ScrollView} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import {UserContext} from '../../context/UserContext';
import {PlaybookContext} from '../../context/PlaybookContext';
import {CategoryContext} from '../../context/CategoryContext';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {PlaybookCard} from './PlaybookCard/PlaybookCard';
import {CategoryButton} from './CategoryButton/CartegoryButton';

export const Dashboard = () => {
  const {userId} = useContext(UserContext);
  const {playbooks, getPlaybooksByUser} = useContext(PlaybookContext);
  const {categories} = useContext(CategoryContext);

  const navigation = useNavigation();

  useEffect(() => {
    getPlaybooksByUser(userId);
  }, []);

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
          <View>
            {categories.map(category => (
              <CategoryButton key={category.id} name={category.name} />
            ))}
          </View>
          <TouchableOpacity
            style={styles.addCategoryButton}
            onPress={() => navigation.navigate('CreateCategory')}>
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
          {playbooks.map(playbook => (
            <PlaybookCard
              key={playbook.id}
              title={playbook.name}
              text={playbook.description}
              id={playbook.id}
            />
          ))}
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
