import React, {Component} from 'react';
import {View, Text} from 'react-native';

export default class Header extends Component {
    render() {
        return (
            <View style={{alignItems: "center"}}>
                <Text>Birdie</Text>
                <Text>The golf score keeper</Text>
            </View>
        )
    }
}