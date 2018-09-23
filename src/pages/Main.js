import React, {Component} from 'react';
import {View, Text, TextInput, TouchableOpacity, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from 'react-navigation';
import Common from '../common';
import Home from './Home';
import Found from './Found';
import Personal from './Personal';

const Tab = createBottomTabNavigator({
    Home: {
        screen: Home
    },
    Found: {
        screen: Found
    },
    Personal: {
        screen: Personal
    }
});

export default class Main extends Component {
    static navigationOptions = {
        header: null
    };

    render() {
        return (
            <Tab/>
        );
    }
}

const styles = StyleSheet.create({});
