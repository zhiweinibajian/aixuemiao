import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Common from '../common'

export default class Setting extends Component {
    render() {
        let {title} = this.props;
        return (
            <View>
                <Text>个人设置</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({});
