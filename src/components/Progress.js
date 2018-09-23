import React, {Component} from 'react';
import {View, Text, StyleSheet, findNodeHandle, UIManager, ToastAndroid} from 'react-native';
import Common from '../common'

export default class Progress extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        let {progress} = this.props;
        let progressWidth = 200 * progress;
        return (
            <View style={styles.progressBottom} ref='progressBottom'>
                <View style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: progressWidth,
                    height: 12,
                    borderRadius: 12,
                    backgroundColor: Common.color.sub_theme
                }}></View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    progressBottom: {
        width: 200,
        backgroundColor: '#888888',
        height: 12,
        borderRadius: 12,
        position: 'relative'
    }

});
