import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { PrivateRoute } from '../pages/PrivateRoute/PrivateRoute'
import { Login } from '../pages/Login/Login'
import { Register } from '../pages/Register/Register'
import { UpdateCard } from '../pages/UpdateCard/UpdateCard'
import { Dashboard } from '../pages/Dashboard/Dashboard'
import { CreateCard } from '../pages/CreateCard/CreateCard'

const Stack = createNativeStackNavigator();

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
                <Stack.Screen name="UpdateCard" component={UpdateCard} />
                <Stack.Screen name="Dashboard" component={Dashboard} />
                <Stack.Screen name="CreateCard" component={CreateCard} />
            </Stack.Navigator>
        </NavigationContainer>
    )
};

export default AppStack;