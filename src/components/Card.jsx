import React, {useEffect, useState} from 'react';
import {View, Image, Pressable, Text} from 'react-native';
import MyContext from './MyContext';

import lightMode from '../styles/CardStyles/Card.light.styles';
import darkMode from '../styles/CardStyles/Card.dark.styles';

import GetDeck from '../data/Deck';
const Card = ({navigation}) => {
  const [isRunning, setIsRunning] = useState(true);
  const [card, setCard] = useState(require('../assets/2C.png'));
  const deck = GetDeck();
  const isDark = React.useContext(MyContext);
  const styles = isDark ? lightMode : darkMode;
  useEffect(() => {
    //code
    let interval;
    if (isRunning === true) {
      interval = setInterval(() => {
        setCard(generateRandomCard(deck));
      }, 100);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  });
  return (
    <View style={styles.container}>
      <Image style={styles.imageContainer} source={card} resizeMode="contain" />
      <Pressable onPress={() => setIsRunning(false)} style={styles.stopButton}>
        <Text style={styles.buttonText}>Stop</Text>
      </Pressable>
      <View style={styles.buttonGroup}>
        <Pressable
          style={styles.restartButton}
          onPress={() => setIsRunning(true)}>
          <Text style={styles.buttonText}>Restart</Text>
        </Pressable>
        <Pressable
          style={styles.rulesButton}
          onPress={() => navigation.navigate('Rules')}>
          <Text style={styles.buttonText}>Rules</Text>
        </Pressable>
      </View>
    </View>
  );
};

const generateRandomCard = arr => {
  return arr[Math.floor(Math.random() * arr.length)];
};

export default Card;
