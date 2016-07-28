import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  StatusBar,
  TouchableHighlight,
  Modal
} from 'react-native';
import NavigationBar from 'react-native-navbar';
import LinearGradient from 'react-native-linear-gradient';

let Dimensions = require('Dimensions');
let {width, height} = Dimensions.get('window');

export default React.createClass({

    keepPlaying() {
        this.props.navigator.pop();
    },

    render() {
        let matchTextIntro = `It's a Match!`,
            matchText = `You and ${this.props.cardInfo.name} have liked each other.`;
        return (
            <View>
                <LinearGradient
                    colors={['#243B55','#141E30']}
                    style={styles.linearGradient} />
                <View style={styles.mainContainer}>
                    <View style={styles.matchContainer}>
                        <Text style={styles.matchTextIntro}>{matchTextIntro}</Text>
                    </View>
                    <View style={styles.profileContainer}>
                        <View style={styles.logoHolder}>
                            <Image style={styles.logo} source={require('./../images/logo/hoofd.png')}></Image>
                        </View>
                        <View style={styles.logoHolderMatch}>
                            <Image style={styles.thumbnailModal} source={this.props.cardInfo.image}></Image>
                        </View>
                    </View>
                    <Text style={styles.matchSmallText}>{matchText}</Text>
                    <View style={styles.buttonContainer}>
                        <Text style={styles.button}>Send a Message</Text>
                        <TouchableHighlight onPress={() => this.keepPlaying()}>
                            <Text style={styles.button}>Keep Playing</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </View>
        )
    }
});

const styles = StyleSheet.create({
    mainContainer: {
        position: 'absolute',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        top: 0,
        right: 0,
        left: 0,
        width: width,
        paddingRight: 20,
        paddingLeft: 20
    },
    matchContainer: {
        marginTop: 100
    },
    profileContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 30
    },
    linearGradient: {
        width: width,
        height:height
    },
    logoHolder: {
        width: 112,
        height: 112,
        borderRadius: 112,
        borderWidth: 1,
        borderColor: '#E3CCCD',
        backgroundColor: '#F7F7F7',
        marginRight: 10,
    },
    logo: {
        width: 81,
        height: 115,
        marginLeft: 14
    },
    logoHolderMatch: {
        width: 112,
        height: 112,
        marginLeft: 10,
        borderRadius: 56,
        borderWidth: 2,
        borderColor: 'white',
        overflow: 'hidden'
    },
    thumbnailModal: {
        height: 112,
        width: 112
    },
    matchTextIntro: {
        color: '#F7F7F7',
        fontSize: 60,
        fontFamily: 'HelveticaNeue-Light'
    },
    matchSmallText: {
        color: '#F7F7F7',
        fontSize: 18,
        fontFamily: 'HelveticaNeue-Light'
    },
    buttonContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginTop: 20
    },
    button: {
        backgroundColor: 'transparent',// light pink: E3CCCD, pink: BF373B, off white: F7F7F7
        borderWidth: 1,
        borderColor: '#F7F7F7',
        fontFamily: 'HelveticaNeue-Light',
        color: '#FFF',
        textAlign: 'center',
        lineHeight: 26,
        fontSize: 16,
        padding: 20,
        width: width - 80,
        marginTop: 20
    }
});
