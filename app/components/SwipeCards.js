import React, {Component} from 'react';

import {
  StyleSheet,
  Text,
  View,
  Animated,
  PanResponder,
  Image
} from 'react-native';

import clamp from 'clamp';

import Defaults from './Defaults.js';

const SWIPE_THRESHOLD = 120;

export default class SwipeCards extends Component {

  static propTypes = {
    cards: React.PropTypes.array,
    renderCards: React.PropTypes.func,
    loop: React.PropTypes.bool,
    renderNoMoreCards: React.PropTypes.func,
    showYup: React.PropTypes.bool,
    showNope: React.PropTypes.bool,
    handleYup: React.PropTypes.func,
    handleNope: React.PropTypes.func,
    yupText: React.PropTypes.string,
    noText: React.PropTypes.string,
  };

  static defaultProps = {
    cards: [],
    loop: false,
    stack: false,
    stackDepth: 5,
    stackOffsetX: 25,
    stackOffsetY: 0,
    showYup: true,
    showNope: true,
    nopeText: "Nope!",
    yupText: "Yup!",
    handleNope: (card) => null,
    handleYup: (card) => null,
    cardRemoved: (ix) => null,
    renderCard: (card) => null
  };

  constructor(props) {
    super(props);

    this.state = {
      pan: new Animated.ValueXY(),
      enter: new Animated.Value(0.5),
      card: this.props.cards[0],
    };
  }

  get currentIndex() {
    return this.props.cards.indexOf(this.state.card);
  }

  _goToNextCard() {
    let newIdx = this.currentIndex + 1;

    // Checks to see if last card.
    // If props.loop=true, will start again from the first card.
    let card = newIdx > this.props.cards.length - 1
        ? this.props.loop ? this.props.cards[0] : null
        : this.props.cards[newIdx]
      ;

    this.setState({
      card: card
    });
  }

  componentDidMount() {
    this._animateEntrance();
  }

  _animateEntrance() {
    Animated.spring(
      this.state.enter,
      {toValue: 1, friction: 8}
    ).start();
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.cards && nextProps.cards.length > 0){
      this.setState({
        card: nextProps.cards[0]
      })
    }
  }

  componentWillMount() {
    this._panResponder = PanResponder.create({
      onMoveShouldSetResponderCapture: () => true,
      onMoveShouldSetPanResponderCapture: () => true,

      onPanResponderGrant: (e, gestureState) => {
        this.state.pan.setOffset({x: this.state.pan.x._value, y: this.state.pan.y._value});
        this.state.pan.setValue({x: 0, y: 0});
      },

      onPanResponderMove: Animated.event([
        null, {dx: this.state.pan.x, dy: this.state.pan.y},
      ]),

      onPanResponderRelease: (e, {vx, vy}) => {
        this.state.pan.flattenOffset();
        let velocity;

        if (vx >= 0) {
          velocity = clamp(vx, 3, 5);
        } else if (vx < 0) {
          velocity = clamp(vx * -1, 3, 5) * -1;
        }

        if (Math.abs(this.state.pan.x._value) > SWIPE_THRESHOLD) {

          if (this.state.pan.x._value > 0) {
            this.props.handleYup(this.state.card);
          } else {
            this.props.handleNope(this.state.card);
          }

          this.props.cardRemoved(this.currentIndex);

          Animated.decay(this.state.pan, {
            velocity: {x: velocity, y: vy},
            deceleration: 0.98
          }).start(this._resetState.bind(this))
        } else {
          Animated.spring(this.state.pan, {
            toValue: {x: 0, y: 0},
            friction: 4
          }).start();
        }
      }
    })
  }

  _resetState() {
    this.state.pan.setValue({x: 0, y: 0});
    this.state.enter.setValue(0);
    this._animateEntrance();
    this._goToNextCard();
  }

  renderNoMoreCards() {
    if (this.props.renderNoMoreCards) {
      return this.props.renderNoMoreCards();
    }

    return <Defaults.NoMoreCards />;
  }

  /**
   * Renders the cards as a stack with props.stackDepth cards deep.
   */
  renderStack() {
    if (!this.state.card) {
      return this.renderNoMoreCards();
    }

    //Get the next stack of cards to render.
    let cards = this.props.cards.slice(this.currentIndex, this.props.stackDepth).reverse();
    return cards.map((card, i) => {

      let offsetX = this.props.stackOffsetX * cards.length - i * this.props.stackOffsetX;
      let lastOffsetX = offsetX + this.props.stackOffsetX;

      let offsetY = this.props.stackOffsetY * cards.length - i * this.props.stackOffsetY;
      let lastOffsetY = offsetY + this.props.stackOffsetY;

      let opacity = 0.25 + (0.75 / cards.length) * (i + 1);
      let lastOpacity = 0.25 + (0.75 / cards.length) * i ;

      let scale = 0.8 + (0.15 / cards.length) * (i + 1);
      let lastScale = 0.8 + (0.15 / cards.length) * i;

      let style = {
        position: 'absolute',
        top: this.state.enter.interpolate({inputRange: [0, 1], outputRange: [lastOffsetY, offsetY]}),
        left: this.state.enter.interpolate({inputRange: [0, 1], outputRange: [lastOffsetX, offsetX]}),
        opacity: this.state.enter.interpolate({inputRange: [0, 1], outputRange: [lastOpacity, opacity]}),
        transform: [{scale: this.state.enter.interpolate({inputRange: [0, 1], outputRange: [lastScale, scale]})}],
        overflow: 'visible',
        elevation: i * 10,
        shadowColor: "#000000",
        shadowOpacity: 0.5,
        shadowRadius: 3,
        shadowOffset: {
          height: 1,
          width: 1
        }
      };

      //Is this the top card?  If so animate it and hook up the pan handlers.
      if (i+1 === cards.length) {
        let {pan} = this.state;
        let [translateX, translateY] = [pan.x, pan.y];

        let rotate = pan.x.interpolate({inputRange: [-200, 0, 200], outputRange: ["-30deg", "0deg", "30deg"]});
        let opacity = pan.x.interpolate({inputRange: [-200, 0, 200], outputRange: [0.5, 1, 0.5]});

        let animatedCardStyles = {
          ... style,
          transform: [
            {translateX: translateX},
            {translateY: translateY},
            {rotate: rotate},
            {scale: this.state.enter.interpolate({inputRange: [0, 1], outputRange: [lastScale, scale]})}
          ],
          opacity: this.state.enter.interpolate({inputRange: [0, 1], outputRange: [lastOpacity, opacity]})
        };

        return <Animated.View key={"top"} style={[styles.card, animatedCardStyles]} {... this._panResponder.panHandlers}>
          {this.props.renderCard(this.state.card)}
        </Animated.View>;
      }

      return <Animated.View key={'card_' + i} style={style}>{this.props.renderCard(card)}</Animated.View>;
    });
  }

  renderCard() {
    if (!this.state.card) {
      return this.renderNoMoreCards();
    }

    let {pan, enter} = this.state;
    let [translateX, translateY] = [pan.x, pan.y];

    let rotate = pan.x.interpolate({inputRange: [-200, 0, 200], outputRange: ["-30deg", "0deg", "30deg"]});
    let opacity = pan.x.interpolate({inputRange: [-200, 0, 200], outputRange: [0.5, 1, 0.5]});

    let scale = enter;

    let animatedCardStyles = {transform: [{translateX}, {translateY}, {rotate}, {scale}], opacity};

    return <Animated.View key={"top"} style={[styles.card, animatedCardStyles]} {... this._panResponder.panHandlers}>
      {this.props.renderCard(this.state.card)}
    </Animated.View>;
  }

  renderNope() {
    let {pan} = this.state;

    let nopeOpacity = pan.x.interpolate({inputRange: [-150, 0], outputRange: [1, 0]});
    let nopeScale = pan.x.interpolate({inputRange: [-150, 0], outputRange: [1, 0.5], extrapolate: 'clamp'});
    let animatedNopeStyles = {transform: [{scale: nopeScale}], opacity: nopeOpacity};

    if (this.props.renderNope) {
      return this.props.renderNope(pan);
    }

    if (this.props.showNope) {
      return <Animated.View style={[styles.nope, animatedNopeStyles]}>
        <Text style={styles.nopeText}>{this.props.nopeText}</Text>
      </Animated.View>;
    }

    return null;
  }

  renderYup() {
    let {pan} = this.state;

    let yupOpacity = pan.x.interpolate({inputRange: [0, 150], outputRange: [0, 1]});
    let yupScale = pan.x.interpolate({inputRange: [0, 150], outputRange: [0.5, 1], extrapolate: 'clamp'});
    let animatedYupStyles = {transform: [{scale: yupScale}], opacity: yupOpacity};

    if (this.props.renderYup) {
      return this.props.renderYup(pan);
    }

    if (this.props.showYup) {
      return <Animated.View style={[styles.yup, animatedYupStyles]}>
        <Text style={styles.yupText}>{this.props.yupText}</Text>
      </Animated.View>;
    }

    return null;
  }

  render() {
    return (
      <View style={styles.container}>
        {this.props.stack ? this.renderStack() : this.renderCard()}
        {this.renderNope()}
        {this.renderYup()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  yup: {
    borderColor: 'green',
    borderWidth: 2,
    position: 'absolute',
    padding: 20,
    bottom: 20,
    borderRadius: 5,
    right: 20,
  },
  yupText: {
    fontSize: 16,
    color: 'green',
  },
  nope: {
    borderColor: 'red',
    borderWidth: 2,
    position: 'absolute',
    bottom: 20,
    padding: 20,
    borderRadius: 5,
    left: 20,
  },
  nopeText: {
    fontSize: 16,
    color: 'red',
  }
});
