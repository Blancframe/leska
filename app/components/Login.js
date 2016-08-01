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
      size: {width: width, height: height},
      userName: ''
    };
  },

  _onLayoutDidChange: function(e) {
    let layout = e.nativeEvent.layout;
    this.setState({size: {width: layout.width, height: layout.height}});
  },

  onSigninPress(currentUsername) {
    this.props.navigator.push({
        name: 'welcome',
        passProps: {
            username: currentUsername
        }
    });
  },

  render: function() {
    return (
        <View style={styles.mainContainer}>
            <Image style={styles.logo} source={require('./../images/logo/woordmerk.png')}></Image>
            <View style={styles.inputs}>
                <View style={styles.inputContainer}>
                    <Image style={styles.inputUsername} source={require('./../images/iVVVMRX.png')}/>
                    <TextInput
                        style={[styles.input, styles.whiteFont]}
                        placeholder="Username"
                        placeholderTextColor="#FFF"
                        value={this.state.username}
                        onChangeText={(text) => this.setState({userName: text})}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Image style={styles.inputPassword} source={require('./../images/ON58SIG.png')}/>
                    <TextInput
                        password={true}
                        style={[styles.input, styles.whiteFont]}
                        placeholder="Password"
                        placeholderTextColor="#FFF"
                        value={this.state.password}
                    />
                </View>
                <View style={styles.forgotContainer}>
                    <Text style={styles.greyFont}>Forgot Password</Text>
                </View>
                <TouchableHighlight onPress={() => this.onSigninPress(this.state.userName)}>
                    <View style={styles.signin}>
                            <Text style={styles.whiteFont}>Sign In</Text>
                    </View>
                </TouchableHighlight>
                <View style={styles.signup}>
                    <Text style={styles.greyFont}>Dont have an account?<Text style={styles.whiteFont}>  Sign Up</Text></Text>
                </View>
            </View>
        </View>
    );
  }
});

const styles = StyleSheet.create({
    background: {
        opacity: 0.5
    },
    logo: {
        width: 150,
        height: 72,
    },
    mainContainer: {
        top: 0,
        left: 0,
        flex:1,
        paddingTop: 40,
        paddingRight: 50,
        paddingBottom: 50,
        paddingLeft: 50,
        width: width,
        height: height,
        position: 'absolute',
        backgroundColor: 'rgba(30, 30, 30, 0.6)',
    },

     container: {
      flexDirection: 'column',
      flex: 1,
      backgroundColor: 'transparent'
    },
    bg: {
        position: 'absolute',
        left: 0,
        top: 0,
        width: width,
        height: height
    },
    header: {

        alignItems: 'center',
        flex: .5,
        backgroundColor: 'transparent'
    },
    mark: {
        width: 150,
        height: 150
    },
    signin: {
        backgroundColor: '#BF373B',// light pink: E3CCCD, pink: BF373B, off white: F7F7F7
        padding: 20,
        alignItems: 'center'
    },
    signup: {
      justifyContent: 'center',
      alignItems: 'center',
      flex: .15
    },
    inputs: {
        marginTop: 70,
        marginBottom: 10,
        flex: .25
    },
    inputPassword: {
        marginLeft: 15,
        width: 20,
        height: 21
    },
    inputUsername: {
      marginLeft: 15,
      width: 20,
      height: 20
    },
    inputContainer: {
        padding: 10,
        borderWidth: 1,
        borderBottomColor: '#CCC',
        borderColor: 'transparent'
    },
    input: {
        position: 'absolute',
        left: 61,
        top: 12,
        right: 0,
        height: 20,
        fontSize: 14
    },
    forgotContainer: {
      alignItems: 'flex-end',
      padding: 15,
    },
    greyFont: {
      color: '#D8D8D8'
    },
    whiteFont: {
      color: '#FFF'
    }
})
