import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Common from '../common'

export default class Header extends Component {
    render() {
        let {title} = this.props;
        return (
            <View>
                <Text style={styles.header}>{title}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        fontSize: 18,
        textAlign: 'center',
        color: Common.color.white,
        paddingTop: 15,
        paddingBottom: 15,
        backgroundColor: Common.color.theme,
        borderBottomWidth: 1,
        borderBottomColor: Common.color.gray,
    }

});
