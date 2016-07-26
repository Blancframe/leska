import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Navigator,
  TouchableHighlight
} from 'react-native';
import Carousel from './components/Carousel';
import Tinder from './components/Tinder';

const ROUTES = {
    splashscreen: Carousel,
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
      flex: 1,
      flexDirection: 'row',
      backgroundColor: '#F7F7F7',
      paddingTop: 20,
    }
});
