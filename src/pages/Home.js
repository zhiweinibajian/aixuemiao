import React, {Component} from 'react';
import {View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import Common from '../common';
import Progress from '../components/Progress'

export default class Home extends Component {
    static navigationOptions = {
        tabBarIcon: ({focused, tintColor}) => {
            focused ? tintColor = Common.color.sub_theme : '#ccc';
            return (<Icon name='md-home' size={25} color={tintColor}/>);
        },
        tabBarLabel: ({focused, tintColor}) => {
            focused ? tintColor = Common.color.sub_theme : '#ccc';
            return (<Text style={{color: tintColor, textAlign: 'center'}}>首页</Text>)
        }
    };

    constructor(props) {
        super(props);
    }

    // 饲料Modal
    goFeedModal() {

    }

    // 药品Modal
    goMedicalModal() {

    }

    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.flexRow}>
                        <View>
                            <View style={styles.flexRow}>
                                <Text style={styles.marR15}>昵 称：</Text>
                                <Text style={{color: Common.color.sub_theme}}>Kirito的猫</Text>
                            </View>
                            <View style={styles.flexRow}>
                                <Text style={styles.marR15}>生命值</Text>
                                <Progress progress={0.8}/>
                            </View>
                            <View style={styles.flexRow}>
                                <Text style={styles.marR15}>健康值</Text>
                                <Progress progress={0.3}/>
                            </View>
                        </View>
                    </View>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                        <View>
                            <Image source={require('../assets/imgs/cat.gif')} style={{width: 240, height: 240}}/>
                        </View>
                        <View>
                            <View style={{paddingTop: 45, marginBottom: 25}}>
                                <TouchableOpacity style={styles.btn} onPress={this.goFeedModal}>
                                    <EntypoIcon name='bowl' size={35} color='#fff' style={{textAlign: 'center'}}/>
                                </TouchableOpacity>
                                <Text style={{textAlign: 'center'}}>饲料</Text>
                            </View>
                            <View>
                                <TouchableOpacity style={styles.btn} onPress={this.goMedicalModal}>
                                    <Icon name='ios-medkit' size={35} color='#fff' style={{textAlign: 'center'}}/>
                                </TouchableOpacity>
                                <Text style={{textAlign: 'center'}}>药品</Text>
                            </View>
                        </View>
                    </View>
                    <TouchableOpacity style={styles.beginWorkBtn}>
                        <Text style={{textAlign: 'center', fontSize: 20}}>开始工作</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 25
    },
    btn: {
        backgroundColor: Common.color.sub_theme,
        borderRadius: 5,
        padding: 10,
    },
    beginWorkBtn: {
        width: '50%',
        backgroundColor: Common.color.sub_theme,
        borderRadius: 5,
        padding: 10,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 55
    },
    flexRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10
    },
    marR15: {
        marginRight: 15
    }
});
