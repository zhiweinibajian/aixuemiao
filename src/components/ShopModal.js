import React, {Component} from 'react';
import {View, Text, StyleSheet, Modal, TouchableOpacity} from 'react-native';
import Common from '../common';
import Ionicon from 'react-native-vector-icons/Ionicons';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import Progress from './Progress';
import Control from './Control';

export default class ShopModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            feedCount: 1
        };
        this.hideModal = this.hideModal.bind(this);
        this.onFeedMinus = this.onFeedMinus.bind(this);
        this.onFeedAdd = this.onFeedAdd.bind(this);
    }

    onFeedMinus(count) {
        this.setState({
            feedCount: count
        });
    }

    onFeedAdd(count) {
        this.setState({
            feedCount: count
        });
    }

    // 退出Modal
    hideModal() {
        this.props.onHideShopModal(false);
    }

    render() {
        let {showShopModal, modalType} = this.props;
        let modal = null;
        if (modalType === 0) {
            modal = (
                <View style={{paddingTop: 45, paddingBottom: 45}}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                        <View>
                            <EntypoIcon style={{
                                backgroundColor: Common.color.sub_theme,
                                paddingBottom: 10,
                                paddingTop: 10,
                                paddingRight: 10,
                                paddingLeft: 10,
                                borderRadius: 10,
                                marginBottom: 10
                            }} name='bowl' size={45}
                                        color='#fff'/>
                            <Text style={{textAlign: 'center', color: '#fff', fontSize: 20}}>饲料</Text>
                        </View>
                        <View>
                            <Text style={{
                                color: '#fff',
                                textAlign: 'center',
                                marginBottom: 15,
                                fontSize: 20
                            }}>68/100</Text>
                            <Progress progress={0.68}/>
                        </View>
                    </View>
                    <View style={{marginBottom: 15, marginTop: 25}}>
                        <Control count={this.state.feedCount} onMinus={this.onFeedMinus} onAdd={this.onFeedAdd}/>
                    </View>
                    <TouchableOpacity style={{
                        borderRadius: 10,
                        width: '30%',
                        backgroundColor: Common.color.sub_theme,
                        paddingTop: 5,
                        paddingBottom: 5,
                        marginRight: 'auto',
                        marginLeft: 'auto',
                        marginTop: 10
                    }}>
                        <Text style={{color: '#fff', textAlign: 'center', fontSize: 15}}>投 喂</Text>
                    </TouchableOpacity>
                </View>
            );
        } else if (modalType === 1) {
            modal = (
                <View style={{paddingTop: 45, paddingBottom: 45}}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                        <View>
                            <EntypoIcon style={{
                                backgroundColor: Common.color.sub_theme,
                                paddingBottom: 10,
                                paddingTop: 10,
                                paddingRight: 10,
                                paddingLeft: 10,
                                borderRadius: 10,
                                marginBottom: 10
                            }} name='bowl' size={45}
                                        color='#fff'/>
                            <Text style={{textAlign: 'center', color: '#fff', fontSize: 20}}>饲料</Text>
                        </View>
                        <View>
                            <Text style={{
                                color: '#fff',
                                textAlign: 'center',
                                marginBottom: 15,
                                fontSize: 20
                            }}>68/100</Text>
                            <Progress progress={0.68}/>
                        </View>
                    </View>
                    <View style={{marginBottom: 15, marginTop: 25}}>
                        <Control count={this.state.feedCount} onMinus={this.onFeedMinus} onAdd={this.onFeedAdd}/>
                    </View>
                    <TouchableOpacity style={{
                        borderRadius: 10,
                        width: '30%',
                        backgroundColor: Common.color.sub_theme,
                        paddingTop: 5,
                        paddingBottom: 5,
                        marginRight: 'auto',
                        marginLeft: 'auto',
                        marginTop: 10
                    }}>
                        <Text style={{color: '#fff', textAlign: 'center', fontSize: 15}}>投 喂</Text>
                    </TouchableOpacity>
                </View>
            );
        }
        return (
            <Modal animationType='fade' transparent={true} visible={showShopModal} onRequestClose={() => {
                alert("Modal has been closed.");
            }}>
                <View style={styles.container}>
                    <View style={styles.subContainer}>
                        <TouchableOpacity style={styles.cancelBtn} onPress={this.hideModal}>
                            <Ionicon name='ios-close-circle-outline' size={35} color='#fff'/>
                        </TouchableOpacity>
                        {modal}
                    </View>
                </View>
            </Modal>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        flex: 1,
    },
    subContainer: {
        backgroundColor: '#5F5F5F',
        paddingTop: 30,
        paddingBottom: 15,
        position: 'absolute',
        width: '98%',
        top: '20%',
        left: '1%',
        borderRadius: 5
    },
    cancelBtn: {
        position: 'absolute',
        top: 5,
        right: 15
    }
});
