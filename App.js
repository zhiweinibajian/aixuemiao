import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import RootScene from './src/pages/RootScene'

type Props = {};
export default class App extends Component<Props> {
    render() {
        return (
            <RootScene/>
        );
    }
}

const styles = StyleSheet.create({});
