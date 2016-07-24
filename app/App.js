import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Navigator,
  TouchableHighlight
} from 'react-native';
import Carousel from './Carousel';
import Tinder from './Tinder';

const ROUTES = {
    splashscreen: Carousel,
    tinder: Tinder
}

export default class Leska extends Component {
    renderScene(route, navigator) {
        let Component = ROUTES[route.name];
        return <Component navigator={navigator} {...route.passProps} />
    }

    configureScene(route, routeStack) {
        return Navigator.SceneConfigs.HorizontalSwipeJump
    }

    render() {
        return (
            <Navigator
                style={styles.container}
                configureScene={this.configureScene}
                initialRoute={{name: 'splashscreen'}}
                renderScene={this.renderScene}
              />
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      backgroundColor: '#1E1E1E',
      paddingTop: 20,
    }
});
