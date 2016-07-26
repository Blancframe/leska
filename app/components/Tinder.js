import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  TouchableHighlight
} from 'react-native';
import SwipeCards from './SwipeCards';
import NavigationBar from 'react-native-navbar';


let Card = React.createClass({
  showModal(info) {
  },

  render() {
    return (
        <TouchableHighlight onPress={() => this.showModal(this.props)}>
          <View style={styles.card}>
            <Image style={styles.thumbnail} source={{uri: this.props.image}} />
            <Text style={styles.text}>{this.props.name}</Text>
          </View>
        </TouchableHighlight>
    )
  }
})

let NoMoreCards = React.createClass({
  render() {
    return (
      <View style={styles.noMoreCards}>
        <Text>No more cards</Text>
      </View>
    )
  }
})

const Cards = [
  {
      name: 'Anna',
      description: `Hi Aksel, Ik wil de rekening van etentje wel met je delen ;-)`,
      image: `https://s3-us-west-2.amazonaws.com/leska-app/anna.jpg`
  },
  {
      name: `Daniel`,
      description: `Hi Aksel, Ik wil de rekening van etentje wel met je delen ;-)`,
      image: `https://s3-us-west-2.amazonaws.com/leska-app/daniel.jpg`
  },
  {
      name: `Anne`,
      description: `Hi Aksel, Ik wil de rekening van etentje wel met je delen ;-)`,
      image: `https://s3-us-west-2.amazonaws.com/leska-app/anne.jpg`
  },
  {
      name: `Sezayi`,
      description: `Hi Aksel, Ik wil de rekening van etentje wel met je delen ;-)`,
      image: `https://s3-us-west-2.amazonaws.com/leska-app/sezayi.jpg`
  },
  {
      name: `Astrid`,
      description: `Hi Aksel, Ik wil de rekening van etentje wel met je delen ;-)`,
      image: `https://s3-us-west-2.amazonaws.com/leska-app/astrid.jpg`
  },
  {
      name: `Malou`,
      description: `Hi Aksel, Ik wil de rekening van etentje wel met je delen ;-)`,
      image: `https://s3-us-west-2.amazonaws.com/leska-app/malou.jpg`
  },
  {
      name: `Bart`,
      description: `Hi Aksel, Ik wil de rekening van etentje wel met je delen ;-)`,
      image: `https://s3-us-west-2.amazonaws.com/leska-app/bart.jpg`
  },
  {
      name: `Diwy`,
      description: `Lieve Aksel,
        Met jouw vertrek ben ik totaal onthand: wie gaat mij nu katten filmpjes, quotes, prullaria sturen?
        All joking aside, het was geweldig om samen met je te werken en op sneeuwvakantie te gaan en te borrelen.
        Succes met de Kemna opleiding, het freelancen en alle andere creatieve dingen die je gaat ondernemen!
        If there were to be a universal sound depicting peace, I would surely vote for the purr.`,
      image: `https://s3-us-west-2.amazonaws.com/leska-app/malou.jpg`
  },
  {
      name: `Malou`,
      description: `Hi Aksel, Ik wil de rekening van etentje wel met je delen ;-)`,
      image: `https://s3-us-west-2.amazonaws.com/leska-app/malou.jpg`
  },
]

const Cards2 = [
  {name: '10', image: 'https://media.giphy.com/media/12b3E4U9aSndxC/giphy.gif'},
  {name: '11', image: 'https://media4.giphy.com/media/6csVEPEmHWhWg/200.gif'},
  {name: '12', image: 'https://media4.giphy.com/media/AA69fOAMCPa4o/200.gif'},
  {name: '13', image: 'https://media.giphy.com/media/OVHFny0I7njuU/giphy.gif'},
]

export default React.createClass({
  getInitialState() {
    return {
      cards: Cards,
      outOfCards: false
    }
  },
  handleYup (card) {
    console.log("yup")
  },
  handleNope (card) {
    console.log("nope")
  },
  cardRemoved (index) {
    console.log(`The index is ${index}`);

    let CARD_REFRESH_LIMIT = 3

    if (this.state.cards.length - index <= CARD_REFRESH_LIMIT + 1) {
      console.log(`There are only ${this.state.cards.length - index - 1} cards left.`);

      if (!this.state.outOfCards) {
        console.log(`Adding ${Cards2.length} more cards`)

        this.setState({
          cards: this.state.cards.concat(Cards2),
          outOfCards: true
        })
      }

    }

  },
  onBack(url) {
    this.props.navigator.pop();
},
  render() {
    const rightButtonConfig = {
        title: 'back',
        handler: () =>  this.onBack(),
    };

    const titleConfig = {
        title: 'Find Your Match Aksel',
    };

    return (
        <View>
            <NavigationBar
            title={titleConfig}
            leftButton={rightButtonConfig}/>
            <SwipeCards
                style={styles.cardStack}
                cards={this.state.cards}
                loop={false}

                renderCard={(cardData) => <Card {...cardData} />}
                renderNoMoreCards={() => <NoMoreCards />}
                showYup={true}
                showNope={true}

                handleYup={this.handleYup}
                handleNope={this.handleNope}
                nopeText="Hell No!"
                yupText="Lekkah!"
                cardRemoved={this.cardRemoved}
            />
      </View>
    )
  }
})

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    borderRadius: 5,
    overflow: 'hidden',
    borderColor: 'grey',
    backgroundColor: 'white',
    borderWidth: 1,
    elevation: 1,
    marginTop: 30
  },
  thumbnail: {
    flex: 1,
    width: 300,
    height: 400,
  },
  text: {
    fontSize: 20,
    paddingTop: 10,
    paddingBottom: 10
  },
  noMoreCards: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  matchNav: {
      borderBottomColor: '#E3CCCD',
      borderBottomWidth: 1
  }
})
// light pink: E3CCCD, pink: BF373B, off white: F7F7F7
