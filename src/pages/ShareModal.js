import React, {Component} from 'react';
import {View, Text, StyleSheet, Modal, TouchableOpacity, Alert} from 'react-native';
import Common from '../common';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Entypo from 'react-native-vector-icons/Entypo'
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import * as WeChat from "react-native-wechat";

export default class ShareModal extends Component {

    constructor(props) {
        super(props);
        this.hideModal = this.hideModal.bind(this);
    }

    componentDidMount() {
        WeChat.registerApp('wxc2c0ca0c0f8c6581');
    }

    // 退出Modal
    hideModal() {
        this.props.onHideShareModal(false);
    }

    // 微信好友分享
    onWeinFriendShare() {
        WeChat.isWXAppInstalled().then(isInstalled => {
            if (isInstalled) {
                WeChat.shareToSession({type: 'text', description: '是兄弟就下载爱学喵app，一起养猫 --- 微信分享功能测试'});
            }
        });
    }

    // 朋友圈分享
    onWeixinFriendCircleShare() {
        WeChat.isWXAppInstalled().then(isInstalled => {
            if (isInstalled) {
                WeChat.shareToTimeline({type: 'text', description: '是兄弟就下载爱学喵app，一起养猫 --- 微信分享功能测试'});
            }
        });
    }

    render() {
        return (
            <Modal
                animationTyle='slide'
                transparent={true}
                visible={this.props.showShareModal}
                onRequestClose={() => {
                    alert("Modal has been closed.");
                }}
            >
                <View style={styles.container}>
                    <View style={styles.bottomContainer}>
                        <View style={{marginBottom: 15, paddingLeft: 15}}>
                            <Text>发送给</Text>
                        </View>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <TouchableOpacity style={{flex: 1, alignItems: 'center'}}>
                                <FontAwesome name='envelope' size={35}/>
                                <Text style={{marginTop: 15}}>短信</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{flex: 1, alignItems: 'center'}} onPress={this.onWeinFriendShare}>
                                <FontAwesome name='wechat' size={35}/>
                                <Text style={{marginTop: 15}}>微信好友</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{flex: 1, alignItems: 'center'}}
                                              onPress={this.onWeixinFriendCircleShare}>
                                <MaterialCommunityIcon name='camera-iris' size={35}/>
                                <Text style={{marginTop: 15}}>朋友圈</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{flex: 1, alignItems: 'center'}}>
                                <Entypo name='twitter' size={35}/>
                                <Text style={{marginTop: 15}}>twitter</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{flex: 1, alignItems: 'center'}}>
                                <FontAwesome5 name='qq' size={35}/>
                                <Text style={{marginTop: 15}}>QQ</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.divide}></View>
                        <TouchableOpacity onPress={this.hideModal} style={styles.cancelBtn}>
                            <Text style={{textAlign: 'center'}}>取消</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </Modal>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative',
        backgroundColor: 'rgba(0, 0, 0, 0.3)'
    },
    bottomContainer: {
        position: 'absolute',
        width: '100%',
        bottom: 0,
        left: 0,
        backgroundColor: '#FACD89',
        paddingTop: 15,
    },
    divide: {
        marginTop: 15,
        height: 1,
        backgroundColor: '#fff'
    },
    cancelBtn: {
        paddingTop: 25,
        paddingBottom: 15
    }
});
