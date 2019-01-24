import React, {Component}  from 'react';
import { createStackNavigator,createAppContainer, createDrawerNavigator, createBottomTabNavigator, createMaterialBottomTabNavigator } from 'react-navigation';

import Login from '../screens/login';
import Signup from '../screens/signup';
import Home from '../screens/home';

const AppRoutes = createStackNavigator({
    Login: {
        screen: Login,
        navigationOptions: { header: null }
    },
    Signup: {
        screen: Signup,
        navigationOptions: { header: null }
    },
    Home: {
        screen: Home,
        navigationOptions: { header: null }
    },
});

export const AppNav= createAppContainer(AppRoutes);
export default AppNav;