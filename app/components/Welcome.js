import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Navigator,
  TouchableHighlight,
  Image,
  TextInput
} from 'react-native';

let Dimensions = require('Dimensions');
let {width, height} = Dimensions.get('window');

export default React.createClass({
    getInitialState: function() {
        return {
            size: {width: width, height: height}
        };
    },

    _onLayoutDidChange: function(e) {
        let layout = e.nativeEvent.layout;
        this.setState({size: {width: layout.width, height: layout.height}});
    },

    onStartPress(url) {
        this.props.navigator.push({
            name: 'tinder'
        });
    },

    render() {
        return (
            <View>
                <Image
                    style={styles.bgImage}
                    source={require('./../images/road-sunny-day.jpg')}
                />
                <View style={styles.mainContainer}>
                    <Text>Aksel</Text>
                    <TouchableHighlight onPress={() => this.onStartPress()}>
                        <View style={styles.startdating}>
                                <Text style={styles.whiteFont}>Start searching</Text>
                        </View>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
});

const styles = StyleSheet.create({
    mainContainer: {
        top: 0,
        bottom: 0,
        left: 0,
        flex: 4,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 40,
        paddingBottom: 50,
        width: width,
        height: height,
        position: 'absolute',
        backgroundColor: 'rgba(30, 30, 30, 0.6)',
    },
    bgImage: {
        width: width,
        height: height
    },
    startdating: {
        backgroundColor: '#BF373B',// light pink: E3CCCD, pink: BF373B, off white: F7F7F7
        marginTop: 70,
        padding: 20,
        alignItems: 'center',
        width: width - 60
    },
    whiteFont: {
      color: '#FFF'
    }
});
