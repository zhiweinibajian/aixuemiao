import React, {Component} from 'react';
import {View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import Common from '../common';
import Progress from '../components/Progress';
import ShopModal from '../components/ShopModal';

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
        this.state = {
            showShopFeedModal: false,
            showShopMedicalModal: false
        };
        this.goFeedModal = this.goFeedModal.bind(this);
        this.onHideShopFeedModal = this.onHideShopFeedModal.bind(this);
        this.onHideShopMedicalModal = this.onHideShopMedicalModal.bind(this);
        this.goMedicalModal = this.goMedicalModal.bind(this);
    }

    // 饲料Modal
    goFeedModal() {
        this.setState({
            showShopFeedModal: true
        });
    }

    // 退出Modal
    onHideShopFeedModal(bool) {
        this.setState({
            showShopFeedModal: bool
        });
    }

    onHideShopMedicalModal(bool) {
        this.setState({
            showShopMedicalModal: bool
        });
    }

    // 药品Modal
    goMedicalModal() {
        this.setState({
            showShopMedicalModal: true
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <ShopModal showShopModal={this.state.showShopFeedModal}
                           onHideShopModal={this.onHideShopFeedModal}
                           modalType={0}/>
                <ShopModal showShopModal={this.state.showShopMedicalModal}
                           onHideShopModal={this.onHideShopMedicalModal}
                           modalType={1}/>
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
                <View style={{flex: 1, justifyContent: 'center'}}>
                    <View
                        style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
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
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
