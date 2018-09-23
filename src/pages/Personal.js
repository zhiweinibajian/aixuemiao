import React, {Component} from 'react';
import {View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import Common from '../common'

export default class Personal extends Component {
    static navigationOptions = {
        tabBarIcon: ({focused, tintColor}) => {
            focused ? tintColor = Common.color.sub_theme : '#ccc';
            return (<Icon name='ios-person' size={25} color={tintColor}/>);
        },
        tabBarLabel: ({focused, tintColor}) => {
            focused ? tintColor = Common.color.sub_theme : '#ccc';
            return (<Text style={{color: tintColor, textAlign: 'center'}}>个人中心</Text>)
        }
    };

    constructor(props) {
        super(props);
        this.goSetting = this.goSetting.bind(this);
        this.goChatRoom = this.goChatRoom.bind(this);
        this.goHandFriend = this.goHandFriend.bind(this);
        this.goHandFriend = this.goHandFriend.bind(this);
    }

    // 跳转到设置
    goSetting() {

    }

    // 跳转到聊天室
    goChatRoom() {

    }

    // 跳转到邀请好友
    goHandFriend() {

    }

    // 跳转到客服
    goService() {

    }

    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.messageContainer}>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <View style={{width: 55, height: 55, borderRadius: 55}}>
                                <Image source={require('../assets/imgs/cat.gif')}
                                       style={{width: '100%', height: '100%'}}/>
                            </View>
                            <View style={{justifyContent: 'center', marginLeft: 15}}>
                                <Text>Kirito</Text>
                                <Text>17665038043</Text>
                            </View>
                        </View>
                        <View>
                            <FontAwesome name='bell-o' size={25} color={Common.color.sub_theme}/>
                        </View>
                    </View>
                    <View style={styles.boxContainer}>
                        <View style={styles.leftContainer}>
                            <View style={styles.textContainer}>
                                <Text>昵称：</Text>
                                <Text style={{color: '#fff'}}>Kirito的猫</Text>
                            </View>
                            <View style={styles.textContainer}>
                                <Text>性别：</Text>
                                <Text style={{color: '#fff'}}>母</Text>
                            </View>
                            <View style={styles.textContainer}>
                                <Text>年龄：</Text>
                                <Text style={{color: '#fff'}}>3岁</Text>
                            </View>
                            <View style={styles.textContainer}>
                                <Text>生日：</Text>
                                <Text style={{color: '#fff'}}>9.14</Text>
                            </View>
                            <View style={{flexDirection: 'row'}}>
                                <Text>承包人：</Text>
                                <Text style={{color: '#fff'}}>Kirito</Text>
                            </View>
                        </View>
                        <View style={styles.RightContainer}>
                            <Image source={require('../assets/imgs/cat.gif')} style={{width: 150, height: 150}}/>
                        </View>
                    </View>
                    <View style={styles.boxContainer}>
                        <View style={styles.leftContainer}>
                            <View style={styles.textContainer}>
                                <Text>已工作时间：</Text>
                                <Text style={{color: '#fff'}}>xxxx</Text>
                            </View>
                            <View style={styles.textContainer}>
                                <Text>今日已工作：</Text>
                                <Text style={{color: '#fff'}}>xxxx</Text>
                            </View>
                            <View style={styles.textContainer}>
                                <Text>饲料准备：</Text>
                                <Text style={{color: '#fff'}}>xxxx</Text>
                            </View>
                            <View style={styles.textContainer}>
                                <Text>药品准备：</Text>
                                <Text style={{color: '#fff'}}>xxxx</Text>
                            </View>
                        </View>
                        <View style={styles.RightContainer}>
                            <Image source={require('../assets/imgs/cat.gif')} style={{width: 150, height: 150}}/>
                        </View>
                    </View>
                    <View style={styles.btnsContainer}>
                        <TouchableOpacity onPress={this.goSetting()}>
                            <Icon name='md-settings' size={35} color='#fff' style={styles.iconBg}/>
                            <Text style={styles.textCenter}>设置</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.goChatRoom()}>
                            <Icon name='ios-chatbubbles' size={35} color='#fff' style={styles.iconBg}/>
                            <Text style={styles.textCenter}>聊天室</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.goHandFriend()}>
                            <FontAwesome5 name='hand-holding' size={25} color='#fff' style={styles.iconBg}/>
                            <Text style={styles.textCenter}>邀请好友</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.goService()}>
                            <MaterialIcon name='person-outline' size={35} color='#fff' style={styles.iconBg}/>
                            <Text style={styles.textCenter}>客服</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingRight: 15,
        paddingLeft: 15
    },
    messageContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 15,
    },
    boxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FACD89',
        marginBottom: 30,
        borderRadius: 10,
        borderWidth: 5,
        borderColor: Common.color.theme,
        paddingTop: 15,
        paddingBottom: 15,
    },
    leftContainer: {
        flex: 1,
        justifyContent: 'center',
        paddingLeft: 20,
    },
    RightContainer: {
        justifyContent: 'center'
    },
    textContainer: {
        flexDirection: 'row',
        marginBottom: 10,
        alignItems: 'center'
    },
    btnsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginBottom: 15
    },
    iconBg: {
        width: 35,
        height: 35,
        textAlign: 'center',
        borderRadius: 3,
        backgroundColor: Common.color.sub_theme,
        marginRight: 'auto',
        marginLeft: 'auto',
        marginBottom: 5,
    },
    textCenter: {
        textAlign: 'center'
    }
});
