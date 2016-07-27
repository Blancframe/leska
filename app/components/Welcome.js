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
import LinearGradient from 'react-native-linear-gradient';

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
            <LinearGradient
                colors={['#fff', '#fff', '#f7f7f7']}
                style={styles.linearGradient} />
                <View style={styles.mainContainer}>
                    <Image style={styles.logo} source={require('./../images/logo/hoofd.png')}></Image>
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
        backgroundColor: 'transparent',
    },
    linearGradient: {
        width: width,
        height:height
    },
    startdating: {
        backgroundColor: '#BF373B',// light pink: E3CCCD, pink: BF373B, off white: F7F7F7
        marginTop: 70,
        padding: 20,
        alignItems: 'center',
        width: width - 100
    },
    whiteFont: {
      color: '#FFF',
      fontSize: 20
  },
  logoHolder: {
    width: 115,
    height: 115,
    borderRadius: 115,
    borderWidth: 1,
    borderColor: '#E3CCCD'
  },
  logo: {
      width: 81,
      height: 115,
  }
});
