import React, {Component} from 'react';
import {View, Text, TextInput, TouchableOpacity, StyleSheet} from 'react-native';
import Common from '../common'
import Input from '../components/Input';

export default class Login extends Component {
    static navigationOptions = {
        title: '注册',
        headerStyle: {
            backgroundColor: Common.color.theme,
        },
        headerTintColor: Common.color.white,
    };

    constructor(props) {
        super(props);
        this.onPressRegister = this.onPressRegister.bind(this);
    }

    onPressRegister() { // 注册

    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.formContainer}>
                    <View style={styles.inputContainer}>
                        <Input placeholder="请输入账号"/>
                        <Input placeholder="请输入密码"/>
                        <Input placeholder="请确认密码"/>
                    </View>
                    <View style={styles.btn_container}>
                        <TouchableOpacity onPress={this.onPressRegister()} style={styles.buttonLogin}>
                            <Text style={{color: Common.color.white}}>注册</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Common.color.sub_theme
    },
    formContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    inputContainer: {
        alignItems: 'center',
    },
    mar_b35: {
        marginBottom: 35
    },
    btn_container: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    buttonLogin: {
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 20,
        borderRadius: 18,
        backgroundColor: Common.color.login_btn
    },
    buttonRegister: {
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 20,
        borderRadius: 18,
    }
});
