import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  TouchableHighlight,
  Modal
} from 'react-native';
import SwipeCards from './SwipeCards';
import NavigationBar from 'react-native-navbar';
import LinearGradient from 'react-native-linear-gradient';

let Dimensions = require('Dimensions');
let {width, height} = Dimensions.get('window');

let Card = React.createClass({

  getInitialState() {
    return {
      modalVisible: false
    }
  },

  setModalVisible(visible) {
      this.setState({modalVisible: visible});
  },
  render() {
    return (
        <TouchableHighlight onPress={() => {
            this.setModalVisible(true)}}>
          <View style={styles.card}>
            <Image style={styles.thumbnail} source={ this.props.image } />
            <Text style={styles.text}>{this.props.name}</Text>

            <Modal
              animationType={"slide"}
              transparent={true}
              visible={this.state.modalVisible}>
              <TouchableHighlight onPress={() => {
                this.setModalVisible(!this.state.modalVisible)}}>
                 <View style={styles.modalView}>
                  <View style={styles.modalViewContent}>
                    <View style={styles.profileHeader}>
                        <Image style={styles.thumbnailModal} source={ this.props.image } />
                        <Text style={styles.profileName}>{this.props.name},</Text>
                        <Text style={styles.profileDescription}>{this.props.description}</Text>
                    </View>
                  </View>
                 </View>
             </TouchableHighlight>
            </Modal>
          </View>
        </TouchableHighlight>
    )
  }
});

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
      description: `Nothing yet....`,
      image: require('../images/profiles/anna.jpg'),
  },
  {
      name: `Daniel`,
      description: `Who wants to be my Leska date? <3`,
      image: require('../images/profiles/daniel.jpg')
  },
  {
      name: `Sezayi`,
      description: `Nothing yet....`,
      image: require('../images/profiles/sezayi.jpg')
  },
  {
      name: `Astrid`,
      description: `Nothing yet....`,
      image: require('../images/profiles/astrid.jpg')
  },
  {
      name: `Anne`,
      description: `Met wie moet ik nu serieuze gesprekken in skiliften hebben?`,
      image: require('../images/profiles/anne.jpg'),
      match: true
  },
  {
      name: `Malou`,
      description: `Hi Aks, ik wens je mega veel succes met je volgende uitdagingen, ga je missen!
Nog een cheesy quote om in je kelder over na te denken ;-)

"Don't think too much, you'll think your whole life away. Just stop, close your eyes, and follow your heart. I guarantee you, it knows the way."

x Malou`,
      image: require('../images/profiles/malou.jpg')
  },
  {
      name: `Bart`,
      description: `Hi Aksel, Ik wil de rekening van etentje wel met je delen ;-)`,
      image: require('../images/profiles/bart.jpg')
  },
  {
      name: `Diwy`,
      description: `Lieve Aksel,

Met jouw vertrek ben ik totaal onthand: wie gaat mij nu katten filmpjes, quotes, prullaria sturen?
All joking aside, het was geweldig om samen met je te werken en op sneeuwvakantie te gaan en te borrelen.

Succes met de Kemna opleiding, het freelancen en alle andere creatieve dingen die je gaat ondernemen!
If there were to be a universal sound depicting peace, I would surely vote for the purr.`,
      image: require('../images/profiles/diwy.jpg')
  },
  {
      name: `Sven`,
      description: `Nothing yet....sdds`,
      image: require('../images/profiles/sven.jpg'),
      match: true
  },
]

const Cards2 = [
  {
      name: `Nguyen`,
      description: `Open for one day dates till all year round relationship.
Loves dates with: karaoke  -  disco roller skating & bowling and at a later
stage: occasional snowboarding & surfing depending on season - traveling.

#bubbels #goodlife #luxurytravel #airplanes #weekendgetaways #2friendswithbenefits`,
      image:require('../images/profiles/nguyen.jpg')
  }
]

const roomId = '2967829';
const apiToken = 'MeJ3H7SFz8gVp4exDO8YOFsKlGzfFvpTHxm3smNH';

export default React.createClass({
  getInitialState() {
    return {
      cards: Cards,
      outOfCards: false
    }
  },
  _postCardVerdict (card, verdict) {
    let imgPath = verdict ? `approved/{ card.name }.png` : `denied/{ card.name }.png`;

    let data = {
        notify: 'true',
        color: verdict ? 'green' : 'red',
        message_format: 'html',
        message: `<img src=\'https://s3-us-west-2.amazonaws.com/leskaimages/{ imgPath }\' />`
    };
    let url = `https://api.hipchat.com/v2/room/${ roomId }/notification?auth_token=${ apiToken }`

    return fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    }).then(function(r) {console.log(r)});
  },
  _isMatch (card) {
      console.log(`${card}: is a match`);
  },
  handleYup (card) {
    this._postCardVerdict(card, true);
    if (card.match) {
        this._isMatch(card);
    }
  },
  handleNope (card) {
    this._postCardVerdict(card, false);
  },
  cardRemoved (index) {
    console.log(`The index is ${index}`);

    let CARD_REFRESH_LIMIT = 23

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
        title: 'Profile',
        handler: () =>  this.onBack(),
    };

    const titleConfig = {
        title: 'Find Your Match Aksel',
    };

    return (
        <View>
            <LinearGradient
                colors={['#fff', '#f7f7f7', '#fff']}
                style={styles.linearGradient} />
            <NavigationBar
                style={styles.matchNav}
                title={titleConfig}
                leftButton={rightButtonConfig}/>
            <SwipeCards
                style={styles.cardStack}
                cards={this.state.cards}
                loop={true}

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
    borderRadius: 5,
    overflow: 'hidden',
    borderColor: '#E3CCCD',
    borderWidth: 1,
    backgroundColor: '#f7f7f7',
    elevation: 1,
    marginTop: 50
  },
  thumbnail: {
    flex: 1,
    width: 330,
    height: 370,
  },
  text: {
    fontSize: 20,
    paddingTop: 10,
    paddingBottom: 10,
    marginLeft: 10,
    color: '#BF373B'
  },
  noMoreCards: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  matchNav: {
      borderBottomColor: '#f7f7f7',
      borderBottomWidth: 1
  },
  modalView: {
      paddingLeft: 20,
      paddingRight: 20,
      backgroundColor: 'rgba(255, 255, 255, 0.990)',
      height: height
  },
  modalViewContent: {
      flex: 1,
      height: height,
      paddingRight: 20,
      paddingLeft: 20
  },
  closeModal: {
      position: 'absolute',
      top: 20,
      left: 20
  },
  profileHeader: {
      marginTop: 50,
      flex: 1,
      alignItems: 'center',
  },
  thumbnailModal: {
      height: 100,
      width: 100,
      borderRadius: 50,
      overflow: 'hidden'
  },
  profileName: {
      fontSize: 20,
      color: '#BF373B',
      fontWeight: 'bold',
      paddingTop: 20,
  },
  profileDescription: {
    fontSize: 16,
    color: '#444',
    paddingTop: 20,
  }
})
// light pink: E3CCCD, pink: BF373B, off white: F7F7F7
