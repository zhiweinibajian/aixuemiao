import React, {Component} from 'react';
import {View, Text, TextInput, StyleSheet, TouchableOpacity} from 'react-native';
import Common from '../common';
import Ionicon from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.minus = this.minus.bind(this);
        this.add = this.add.bind(this);
    }

    minus() {
        if (this.props.count !== 1) {
            this.props.onMinus(this.props.count - 1);
        }
    }

    add() {
        if (this.props.count !== 100) {
            this.props.onAdd(this.props.count + 1);
        }
    }

    render() {
        let {count} = this.props;
        return (
            <View>
                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                    <TouchableOpacity onPress={this.minus}
                                      style={{
                                          backgroundColor: '#828282', borderLeftWidth: 2,
                                          borderTopWidth: 2,
                                          borderBottomWidth: 2, borderColor: '#fff',
                                      }}>
                        <Feather name='minus' size={25} color='#fff'/>
                    </TouchableOpacity>
                    <Text style={{
                        color: '#fff',
                        fontSize: 18,
                        textAlign: 'center',
                        width: 120,
                        borderWidth: 2,
                        borderColor: '#fff',
                        backgroundColor: '#828282',
                        height: '100%'
                    }}>{count}</Text>
                    <TouchableOpacity onPress={this.add}
                                      style={{
                                          backgroundColor: '#828282', borderRightWidth: 2,
                                          borderTopWidth: 2,
                                          borderBottomWidth: 2, borderColor: '#fff',
                                          paddingLeft: 5,
                                          paddingRight: 5
                                      }}>
                        <Ionicon name='md-add' size={25} color='#fff'/>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({});
