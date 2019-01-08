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

jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore /home/netset/milap_projects/Cambuzz_sign_apk/MY-RELEASE-KEY.keystore /home/netset/milap_projects/Cambuzz_sign_apk/app-release-unsigned.apk cambuzz


  /home/netset/Android/Sdk/build-tools/26.0.2/zipalign -v 4 /home/netset/milap_projects/Cambuzz_sign_apk/app-release-unsigned.apk /home/netset/milap_projects/Cambuzz_sign_apk/cambuzz_app.apk
