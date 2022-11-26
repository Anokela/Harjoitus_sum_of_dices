import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import uuid from 'react-uuid';

export default function App() {
  const NBR_OF_DICES = 2
  const [sumOfDices, setSumOfDices] = useState(0);
  const [diceImages, setDiceImages] = useState([]);

  useEffect(() => {
    initialize();
  }, []);
  

  function initialize() {
    let images = [];
    for(let i = 0; i < NBR_OF_DICES; i++) {
      images[i] = require("./assets/dice-images/smiley.png");
    }
    setDiceImages(images)
  }

  function setImages(throws) {
    let images = [];
    for (let i = 0; i < throws.length; i++) {
      switch (throws[i]) {
        case 1: images[i] = require("./assets/dice-images/1.png"); break;
        case 2: images[i] = require("./assets/dice-images/2.png"); break;
        case 3: images[i] = require("./assets/dice-images/3.png"); break;
        case 4: images[i] = require("./assets/dice-images/4.png"); break;
        case 5: images[i] = require("./assets/dice-images/5.png"); break;
        case 6: images[i] = require("./assets/dice-images/6.png"); break;
        default: break;
      }
    }
    setDiceImages(images)
  }

  function throwDices() {
    let throws = [];
    let sum = 0;
    for(let i = 0; i < NBR_OF_DICES; i++) {
      throws[i] = Math.floor(Math.random() * 6 + 1);
      sum += throws[i];
    }
    setSumOfDices(sum);
    setImages(throws);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Sum of dices</Text>
      <Button
      style={styles.button}
      onPress={throwDices}
      title='Throw dices'>
      </Button>
      <View style={styles.flex}>
        {diceImages.map(dice => (
          <Image style={styles.dice} source={dice} key={uuid()}></Image>
        ))}
      </View>
      <Text style={styles.sum}>Sum of dices is {sumOfDices}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 30,
    marginTop: 100,
    marginBottom: 30,
  },
  button: {
    marginTop: 30,
    marginBottom: 30,
  },
  flex: {
    flexDirection: 'row',
  },
  dice: {
    width: 80,
    height: 80,
    marginTop: 30,
    marginBottom: 15,
    marginRight:10,
  },
  sum: {
    fontSize: 20
  }
});
