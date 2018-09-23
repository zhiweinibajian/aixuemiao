import React, {Component} from 'react';
import {createStackNavigator} from 'react-navigation'
import Login from './Login';
import Register from './Register';
import Main from './Main';
import Common from "../common";

export default createStackNavigator({
    Login: {
        screen: Login
    },
    Register: {
        screen: Register,
    },
    Main: {
        screen: Main,
    }
}, {
    headerLayoutPreset: 'center',
    initialRouteName: 'Login'
});

