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

let finishText = `Jaaaaa, it's a wrap!
Je bent erdoor heen.

Alle chica's en semi chica zijn de revue gepasseerd.
Binnenkort zullen de eerste dates plaatsvinden.

En omdat jij de nieuwe Michiel Huisman bent heb je nog wel het een en ander bij te leren.
Dus, daarom voor jou én je date (al dan niet via Leska opgeduikeld) dit cadeau om op een zelf gekozen moment te verzilveren. `

let NoMoreCards = React.createClass({
    keepPlaying() {
         this.props.navigator.push({
             name: 'welcome'
         })
    },

    render() {
        return (
          <View>
              <LinearGradient
                  colors={['#f7f7f7','#fff']}
                  style={styles.linearGradientNoCards} />
              <View style={styles.mainContainer}>
                <Text style={styles.finishText}>{finishText}</Text>
                <View style={styles.buttonContainer}>
                <TouchableHighlight onPress={() => this.keepPlaying()}>
                <Text style={styles.button}>Keep Playing</Text>
                </TouchableHighlight>
                </View>
              </View>
          </View>
        )
    }
})

const Cards = [
  {
      name: 'Anna',
      description: `No drama Myers-Briggs Catcher in the Rye whiskey.
Having a few beers down to earth only looking for something casual adventures only looking for something casual, watching a movie if you think we have something in common road trips stepping outside your comfort zone hiking.
Down to earth recently moved back foodie beach days food vegetarian.`,
      image: require('../images/profiles/anna.jpg'),
  },
  {
      name: `Daniel`,
      description: `Who wants to be my Leska date? <3`,
      image: require('../images/profiles/daniel.jpg')
  },
  {
      name: `Sezayi`,
      description: `Fascinates me passionate about loyal going to shows.
Seeing as many countries as possible making lasagna from scratch feminism my dogs I'm a good listener, my eyes I'm a good listener crossfit my smartphone playing my guitar.
Nothing too complicated seeing as many countries as possible feminism parallel parking adventures art school.`,
      image: require('../images/profiles/sezayi.jpg')
  },
  {
      name: `Astrid`,
      description: `Oxford comma tacos my eyes thinking about trying yoga.
Short-term dating making people laugh everything but country music extrovert I'm just a regular guy, nothing too complicated if you like my profile exploring the city grab coffee or a drink medical school.
If you're still reading this bikes everything but country music Family Guy you should message me grilling.`,
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
      name: `Mark`,
      description: `Introvert fixing my scooter Sunday funday down to earth.
Really hoppy beers easy-going nothing too complicated strong and confident someone who shares my sense of humor, outdoor activities Oxford comma listening to music I enjoy mountain biking.
I'm looking for going to the gym I hate lists coffee going to the gym bikes.`,
      image: require('../images/profiles/mark.jpg')
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
      description: `Jammer dat je weg gaat man! Ik ga onze (rook)pauzes en wandelingen langs de grachten terug van de CC missen.
Ik hoop dat je naar rechts hebt geswiped, want we moeten sowieso nog eens wat gaan drinken!
Succes met je nieuwe baan en je acteer carriere.`,
      image: require('../images/profiles/sven.jpg'),
      match: true
  },
  {
      name: `Loek`,
      description: `Outdoor activities having a few beers running shoes Kurosawa.
My height and shoulders medical school my eyes playing my guitar my favorite word is,Oxford comma listening to music Breaking Bad open-minded my height and shoulders.
Having a few beers really hoppy beers grilling beach days adventures Ethiopian.`,
      image: require('../images/profiles/loek.jpg')
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
  },
  {
      name: `Amber`,
      description: `Happy hour I enjoy only looking for something casual fitness. Really hoppy beers video games foodie outdoor activities it depends on the night, The Daily Show ask me anything if you like my profile discussing politics I know I listed more than 6 things. Optimistic adventures if you're still reading this foodie going to the gym food.`,
      image: require('../images/profiles/amber.jpg')
  },
  {
      name: `Thijs`,
      description: `Vegen is leuk, maar je moet toch een keerje van de plee komen`,
      image: require('../images/profiles/thijs.jpg')
  },
  {
      name: `Eva`,
      description: `Vegetarian if you think we have something in common strong and confident what to order off of the menu. I'm really good at is pretty awesome sushi happy hour nothing too complicated, coffee Myers-Briggs self-deprecating humor video games tattoos. Discussing politics I hate lists as friends if you're still reading this grilling adventures.`,
      image: require('../images/profiles/eva.jpg')
  },
  {
      name: `Jhon`,
      description: `Aksel ik heb zoveel respect voor jou dat je deze stapt neemt. Voor jezelf beginnen omdat je dan makkelijker kan schakelen tussen al je acteerwerk!
Ik wens je veel succes en hoop je nog een keer tegen te komen.`,
      image: require('../images/profiles/jhon.jpg')
  },
  {
      name: `Ernst`,
      description: `Passionate about Catcher in the Rye medical school my goofy smile. Trying different restaurants is pretty awesome trying different restaurants crossfit coffee, foreign films no drama as friends if you're still reading this local sports teams. Someone who shares my sense of humor just looking to have some fun Netflix fixing my scooter I don't take myself too seriously glass half-full.`,
      image: require('../images/profiles/ernst.jpg')
  },
  {
      name: `Marleen`,
      description: `Nothing too complicated my height and shoulders I'm pretty laid-back fitness. Discussing politics shoot me a message just looking to have some fun fascinates me someone who shares my sense of humor, I'm looking for it depends on the night I don't really like talking about myself introvert strong and confident. Beach days I'm not good at filling out these things exploring the city I don't really like talking about myself Breaking Bad On The Road.`,
      image: require('../images/profiles/marleen.jpg')
  },
  {
      name: `Floortje`,
      description: `Aks, heel jammer dat ons gaat verlaten, maar super mooi hoe jij je acteerdroom najaagt!
Om in de Disney sferen te blijven: "If you can dream it, you can do it. Alway remember that this whole thing was started with a dream and a mouse"`,
      image: require('../images/profiles/floortje.jpg')
  },
  {
      name: `Quinten`,
      description: `Video games Family Guy Oxford comma using my farmshare. Training for the marathon whatever topic is on NPR skiing foreign films my smartphone, coffee Kurosawa stepping outside your comfort zone vegetarian ask me anything. Kurosawa rock climbing I enjoy outdoorsy Breaking Bad Portlandia.`,
      image: require('../images/profiles/quinten.jpg')
  },
  {
      name: `Jasmijn`,
      description: `Game of Thrones Woody Allen foodie sushi. I'm a big fan of someone who shares my sense of humor Kurosawa my beard my beard, bacon foreign films but then it wouldn't be private long-term dating trying this for the first time. Jazz cafes happy hour hiking coffee mountain biking I enjoy.`,
      image: require('../images/profiles/jasmijn.jpg')
  },
  {
      name: `Rene`,
      description: `Team Nitro 4Ever!`,
      image: require('../images/profiles/rene.jpg')
  },
]

const roomId = '2978326';
const apiToken = 'jDLfQZFXEkgVfiBCbTMu6ISAFfK7jjikZoX48LcA';

export default React.createClass({
  getInitialState() {
    return {
      cards: Cards,
      outOfCards: false
    }
  },
  _postCardVerdict (card, verdict) {
    let cardName = card.name;
    cardName = cardName.toLowerCase();

    let imgPath = verdict ? `approved/${ cardName }.png` : `denied/${ cardName }.png`;

    let data = {
        notify: 'true',
        message_format: 'html',
        message: `<img src=\'https://s3-us-west-2.amazonaws.com/leskaimages/${ imgPath }\' />`
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
      this.props.navigator.push({
          name: 'match',
          passProps: {
              cardInfo: card
          }
      })
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
        <View style={{width: width, height: height}}>
            <LinearGradient
                colors={['#fff', '#f7f7f7', '#fff']}
                style={styles.linearGradient} />
            <NavigationBar
                style={styles.matchNav}
                title={titleConfig}
                leftButton={rightButtonConfig}/>
            <View style={styles.content}>
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
          <View style={styles.logoWrapper} >
            <Image style={styles.logo} source={require('./../images/logo/woordmerk.png')}></Image>
          </View>
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
  logoWrapper: {
    width: width,
    position: 'absolute',
    bottom: 50,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  logo: {
    // flex: 1

  },
  text: {
    fontSize: 20,
    paddingTop: 10,
    paddingBottom: 10,
    marginLeft: 10,
    color: '#BF373B'
  },
  noMoreCards: {
    width: width,
    height: height
  },
  linearGradientNoCards: {
      width: width,
      height:height
  },
  finishText: {
    fontSize: 20,
    fontFamily: 'Helvetica'
  },
  mainContainer: {
      position: 'absolute',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      top: 70,
      right: 0,
      left: 0,
      width: width,
      paddingRight: 40,
      paddingLeft: 40
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
        borderColor: '#BF373B',
        fontFamily: 'HelveticaNeue-Light',
        color: '#BF373B',
        textAlign: 'center',
        lineHeight: 26,
        fontSize: 16,
        padding: 20,
        width: width - 80,
        marginTop: 20
    }
})
// light pink: E3CCCD, pink: BF373B, off white: F7F7F7
