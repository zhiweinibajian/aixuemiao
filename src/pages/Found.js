import React, {Component} from 'react';
import {View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/Feather'
import EvilIcon from 'react-native-vector-icons/EvilIcons'
import Common from '../common'

export default class Found extends Component {
    static navigationOptions = {
        tabBarIcon: ({focused, tintColor}) => {
            focused ? tintColor = Common.color.sub_theme : '#ccc';
            return (<Icon name='search' size={25} color={tintColor}/>);
        },
        tabBarLabel: ({focused, tintColor}) => {
            focused ? tintColor = Common.color.sub_theme : '#ccc';
            return (<Text style={{color: tintColor, textAlign: 'center'}}>发现</Text>)
        }
    };

    constructor(props) {
        super(props);
        this.handleMyCourseIcon = this.handleMyCourseIcon.bind(this);
        this.goMyCourse = this.goMyCourse.bind(this);
        this.goMoreCourse = this.goMoreCourse.bind(this);
        this.state = {
            myCourseSwitch: false
        };
    }

    // 我的课程箭头点击事件
    handleMyCourseIcon() {
        this.setState(previousState => {
            return {myCourseSwitch: !previousState.myCourseSwitch}
        });
    }

    // 进入课程
    goMyCourse() {

    }

    // 更多课程
    goMoreCourse() {

    }

    render() {
        let myCourseIconName = this.state.myCourseSwitch ? 'arrow-up' : 'arrow-down';
        let myCourseDrop = null;
        if (this.state.myCourseSwitch) {
            myCourseDrop = (
                <View style={{padding: 15}}>
                    <Text style={{borderBottomWidth: 1, borderColor: '#bbb', padding: 3}}>1.2018.9.20(今日)
                        12:00-14:30</Text>
                    <Text style={{borderBottomWidth: 1, borderColor: '#bbb', padding: 3}}>陈仲恺考研隐喻一 阅读A 精讲</Text>
                    <View
                        style={{flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', marginTop: 15}}>
                        <TouchableOpacity
                            style={{
                                marginRight: 15,
                                borderWidth: 2,
                                borderRadius: 15,
                                borderColor: '#fff',
                                paddingLeft: 10,
                                paddingRight: 10,
                                paddingTop: 5,
                                paddingBottom: 5,
                                backgroundColor: '#D3A96A'
                            }}>
                            <Text style={{color: '#fff'}}>进入课程</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{
                            borderWidth: 2,
                            borderRadius: 15,
                            borderColor: '#fff',
                            paddingLeft: 10,
                            paddingRight: 10,
                            paddingTop: 5,
                            paddingBottom: 5,
                            backgroundColor: '#D3A96A'
                        }}>
                            <Text style={{color: '#fff'}}>更多课程</Text>
                        </TouchableOpacity>
                    </View>
                </View>);
        }
        return (
            <ScrollView>
                <View style={styles.container}>
                    {/* 兴趣小组 */}
                    <View style={styles.interestContainer}>
                        <View style={{flexDirection: 'row'}}>
                            <Text style={{color: '#fff'}}>兴趣小组</Text>
                            <Text style={{color: 'red'}}>(有人@我)</Text>
                        </View>
                    </View>

                    {/* 咪咪LIVE */}
                    <View style={styles.mimiContainer}>
                        <View style={{flexDirection: 'row'}}>
                            <Text style={{color: '#fff'}}>咪咪LIVE</Text>
                            <Text style={{color: 'red'}}>(有新通知啦！喵)</Text>
                        </View>
                    </View>

                    {/* 我的课程 */}
                    <View style={styles.myCourseContainer}>
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            backgroundColor: '#CFB18A',
                            paddingLeft: 25,
                            paddingRight: 5,
                            paddingTop: 15,
                            paddingBottom: 15
                        }}>
                            <View style={{flexDirection: 'row'}}>
                                <Text style={{color: '#fff'}}>我的课程</Text>
                                <Text style={{color: 'red'}}>(12:00要上课呦！)</Text>
                            </View>
                            <TouchableOpacity onPress={this.handleMyCourseIcon}>
                                <EvilIcon name={myCourseIconName} size={45} color='#fff'/>
                            </TouchableOpacity>
                        </View>
                        {myCourseDrop}
                    </View>
                </View>
            </ScrollView>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        paddingLeft: 25,
        paddingRight: 25,
        paddingTop: 25,
        paddingBottom: 25
    },
    interestContainer: {
        backgroundColor: '#F5AF82',
        paddingLeft: 25,
        paddingRight: 5,
        paddingTop: 25,
        paddingBottom: 25,
        marginBottom: 35

    },
    mimiContainer: {
        backgroundColor: '#9ACAED',
        paddingLeft: 25,
        paddingRight: 5,
        paddingTop: 25,
        paddingBottom: 25,
        marginBottom: 35
    },
    myCourseContainer: {
        backgroundColor: '#FACD89',
        marginBottom: 35
    }
});
