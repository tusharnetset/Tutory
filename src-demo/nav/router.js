import React, {Component}  from 'react';
import { createStackNavigator,createAppContainer, createDrawerNavigator, createBottomTabNavigator, createMaterialBottomTabNavigator } from 'react-navigation';

import Home from '../screens/home';
import Login from '../screens/login';


const AppRoutes = createStackNavigator({
    Login: {
        screen: Login,
        navigationOptions: { header: null }
    },
    Home: {
        screen: Home,
        navigationOptions: { header: null }
    },
    
});

export const AppNav= createAppContainer(AppRoutes);
export default AppNav;