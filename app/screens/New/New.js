import React, {Component} from 'react';
import {View, Text} from 'react-native';

export default class New extends Component {
    render() {
        return (
            <View style={{alignItems: 'center'}}>
                <Text>New {this.props.type}</Text>
            </View>
        )
    }
}