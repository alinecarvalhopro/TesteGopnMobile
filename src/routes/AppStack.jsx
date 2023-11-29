import 'react-native-gesture-handler';

import {theme} from '../global/styles/theme';

import React from 'react';

import {Image, TouchableOpacity, View} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {PrivateRoute} from '../pages/PrivateRoute/PrivateRoute';
import {Login} from '../pages/Login/Login';
import {Register} from '../pages/Register/Register';
import {UpdateCard} from '../pages/UpdateCard/UpdateCard';
import {Dashboard} from '../pages/Dashboard/Dashboard';
import {CreateCard} from '../pages/CreateCard/CreateCard';
import {GenericPage} from '../pages/GenericPage/GenericPage';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const CustomDrawerContent = props => {
  return (
    <DrawerContentScrollView {...props}>
      <View style={{backgroundColor: theme.drawer.backgroundcolor}}>
        <View style={{padding: 20, alignItems: 'left'}}>
          <Image
            source={require('../images/png/logo.png')}
            style={{width: 150, resizeMode: 'contain'}}
          />
        </View>
      </View>
      <DrawerItemList {...props} />
      <TouchableOpacity>
        <DrawerItem
          label="Logout"
          icon={({color, size}) => (
            <MaterialIcons name="logout" size={size} color={color} />
          )}
          onPress={() => console.log('logout')}
        />
      </TouchableOpacity>
    </DrawerContentScrollView>
  );
};

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      screenOptions={() => ({
        headerShown: false,
        drawerActiveTintColor: theme.drawer.options,
        drawerStyle: {
          backgroundColor: theme.drawer.backgroundcolor,
          borderTopRightRadius: 20,
          borderBottomRightRadius: 20,
        },
      })}
      drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen
        name="Playbooks"
        component={Dashboard}
        options={{
          drawerIcon: ({color, size}) => (
            <MaterialIcons name="book" size={size} color={color} />
          ),
          drawerLabel: 'Playbooks',
        }}
      />
      <Drawer.Screen
        name="Generic Page"
        component={GenericPage}
        options={{
          drawerIcon: ({color, size}) => (
            <MaterialIcons name="comment" size={size} color={color} />
          ),
          drawerLabel: 'Generic Page',
        }}
      />
      <Drawer.Screen
        name="Minha conta"
        component={GenericPage}
        options={{
          drawerIcon: ({color, size}) => (
            <MaterialIcons name="person" size={size} color={color} />
          ),
          drawerLabel: 'Minha conta',
        }}
      />
    </Drawer.Navigator>
  );
};

const AppStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="PrivateRoute"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="PrivateRoute" component={PrivateRoute} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="DashboardDrawer" component={DrawerNavigation} />
        <Stack.Screen name="UpdateCard" component={UpdateCard} />
        <Stack.Screen name="CreateCard" component={CreateCard} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppStack;