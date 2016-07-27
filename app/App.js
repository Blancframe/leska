import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Navigator,
  TouchableHighlight
} from 'react-native';
import Carousel from './components/Carousel';
import Welcome from './components/Welcome';
import Tinder from './components/Tinder';

const ROUTES = {
    splashscreen: Carousel,
    welcome: Welcome,
    tinder: Tinder
}

export default class Leska extends Component {
    renderScene(route, navigator) {
        let Component = ROUTES[route.name];
        return <Component navigator={navigator} {...route.passProps} />
    }

    render() {
        return (
            <Navigator
                style={styles.container}
                configureScene={(route) => ({
                    ...route.sceneConfig || Navigator.SceneConfigs.HorizontalSwipeJump,
                    gestures: route.gestures
                })}
                initialRoute={{name: 'splashscreen'}}
                renderScene={this.renderScene}
              />
        );
    }
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#FFF',
    }
});
