import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Navigator,
  TouchableHighlight,
  Image
} from 'react-native';
import Login from './Login';

let Carousel = require('react-native-looped-carousel');
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

  render: function() {
    return (
        <View style={{flex: 1}} onLayout={this._onLayoutDidChange}>
            <Carousel delay={8000} style={this.state.size}>
                <View style={[this.state.size]}>
                    <Image style={[this.state.size]} source={require('./../images/aks_gitaar_les.jpg')} />
                </View>
                <View style={[this.state.size]}>
                    <Image style={[this.state.size]} source={require('./../images/aks-gangster.jpg')} />
                </View>
                <View style={[this.state.size]}>
                    <Image style={[this.state.size]} source={require('./../images/aks_schoonzoon.jpg')} />
                </View>
            </Carousel>
            <Login navigator={this.props.navigator}/>
        </View>
    );
  }
});

const styles = StyleSheet.create({
  logo: {
    position: 'absolute',
    left: 30,
    top: 30,
    width: 100,
    height: 109,
  }
})
