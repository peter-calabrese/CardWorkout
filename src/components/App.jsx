import React, {useEffect, useState} from 'react';
import {View, Image, Button, Pressable, Text} from 'react-native';
import styles from '../styles/App.styles';
import GetDeck from '../Deck';

const App = () => {
  const [isRunning, setIsRunning] = useState(true);
  const [card, setCard] = useState(require('../assets/2C.png'));
  const deck = GetDeck();

  useEffect(() => {
    //code
    let interval;
    if (isRunning === true) {
      interval = setInterval(() => {
        setCard(generateRandomCard(deck));
      }, 50);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  });
  return (
    <View style={styles.container}>
      <Image style={styles.imageContainer} source={card} />
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
          onPress={() => console.log('Rules')}>
          <Text style={styles.buttonText}>Rules</Text>
        </Pressable>
      </View>
    </View>
  );
};

const generateRandomCard = arr => {
  return arr[Math.floor(Math.random() * arr.length)];
};

export default App;
