import React, {Component} from 'react';
import {TextInput, StyleSheet} from 'react-native';
import Common from '../common'

export default class Login extends Component {
    render() {
        let {placeholder} = this.props;
        return (
            <TextInput underlineColorAndroid="transparent" placeholderTextColor={Common.color.theme}
                       selectionColor={Common.color.theme}
                       style={styles.textInput} placeholder={placeholder}/>

        );
    }
}

const styles = StyleSheet.create({
    textInput: {
        width: '80%',
        height: 40,
        paddingLeft: 20,
        backgroundColor: Common.color.white,
        borderRadius: 25,
        borderWidth: 1,
        borderColor: Common.color.gray,
        color: Common.color.theme,
        marginBottom:35
    }

});
