import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Navigator,
  TouchableHighlight,
  Image
} from 'react-native';

var Carousel = require('react-native-looped-carousel');
var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window');

export default React.createClass({
  getInitialState: function() {
    return {
      size: {width: width, height: height}
    };
  },

  _onLayoutDidChange: function(e) {
    var layout = e.nativeEvent.layout;
    this.setState({size: {width: layout.width, height: layout.height}});
  },

  onChannelPress(url) {
    this.props.navigator.push({name: 'tinder'});
},

  render: function() {
    return (
        <View style={{flex: 1}} onLayout={this._onLayoutDidChange}>
            <Carousel delay={2000} style={this.state.size}>
                <View style={[this.state.size]}>
                    <TouchableHighlight onPress={() => this.onChannelPress()}>
                        <Image style={[this.state.size]} source={require('./images/aks_gitaar_les.jpg')} />
                    </TouchableHighlight>
                </View>
                <View style={[this.state.size]}>
                    <TouchableHighlight onPress={() => this.onChannelPress()}>
                        <Image style={[this.state.size]} source={require('./images/aks-gangster.jpg')} />
                    </TouchableHighlight>
                </View>
                <View style={[this.state.size]}>
                    <TouchableHighlight onPress={() => this.onChannelPress()}>
                        <Image style={[this.state.size]} source={require('./images/aks_schoonzoon.jpg')} />
                    </TouchableHighlight>
                </View>
            </Carousel>
            <Text>Leska</Text>
        </View>
    );
  }
});
