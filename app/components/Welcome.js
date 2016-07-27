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
import NavigationBar from 'react-native-navbar';
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
        const titleConfig = {
            title: `Profile ${this.props.username}`,
        };

        return (
            <View>
                <NavigationBar
                    style={styles.matchNav}
                    title={titleConfig}/>
                <LinearGradient
                    colors={['#BF373B','#BF373B','#BF373B','#BF373B','#E3CCCD']}
                    style={styles.linearGradient} />
                    <View style={styles.mainContainer}>
                        <View style={styles.logoHolder}>
                            <Image style={styles.logo} source={require('./../images/logo/hoofd.png')}></Image>
                        </View>
                        <Text style={styles.hobby}>22 years young, Great Actor @paramountpictures and @disney</Text>
                        <Text style={styles.hobby}>Likes, Singing, playing guitar, '(╯°□°）╯︵ ┻━┻'</Text>
                        <TouchableHighlight onPress={() => this.onStartPress()}>
                            <View style={styles.startdating}>
                                <Text style={styles.whiteFont}>Find your match</Text>
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
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 40,
        paddingBottom: 50,
        paddingRight: 20,
        paddingLeft: 20,
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
        backgroundColor: '#F7F7F7',// light pink: E3CCCD, pink: BF373B, off white: F7F7F7
        marginTop: 70,
        padding: 20,
        alignItems: 'center',
        width: width - 100
    },
    whiteFont: {
        color: '#BF373B',
        fontSize: 20
    },
    logoHolder: {
        width: 112,
        height: 112,
        borderRadius: 112,
        borderWidth: 1,
        borderColor: '#E3CCCD',
        backgroundColor: '#F7F7F7',
        marginBottom: 40
    },
    logo: {
        width: 81,
        height: 115,
        marginLeft: 14
    },
    matchNav: {
        borderBottomColor: '#f7f7f7',
        borderBottomWidth: 1
    },
    hobby: {
        color: '#FFF',
        textAlign: 'center',
        lineHeight: 26,
        fontSize: 16
    }
});
