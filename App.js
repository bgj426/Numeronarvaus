import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Alert } from 'react-native';

export default function App() {

  const [text, setText] = useState('')
  const [guess, setGuess ] = useState('')
  const [guessnum, setGuessnum] = useState('')
  const [randomnumber, setRandomnumber] = useState('')

  useEffect(() => {
    startGame();
}, [])

const startGame = () => {
  setRandomnumber(Math.floor(Math.random() *100) +1)
  setGuessnum(0)
  setText('Guess a number between 1-100!')
}


const makeAguess = () => {
  if (guess == randomnumber) {
    Alert.alert('You guessed the number in ' + guessnum + ' guesses!')
    startGame();
    setGuess('')
  }

  else if (guess < randomnumber) {
    setText('Your guess ' + guess + ' is too low')
    setGuessnum(guessnum + 1)
    setGuess('')
  }

  else if (guess > randomnumber) {
    setText('Your guess ' + guess + ' is too high')
    setGuessnum(guessnum + 1)
    setGuess('')
  }
}


  return (

    <View style={styles.container}>
      <Text
      style={{fontSize: 21, paddingBottom: 10}}>
      {text}
      </Text>

      <TextInput
      keyboardType='numeric'
      style={{fontSize: 20, textAlign: 'center', width: 50, height: 50, borderColor: 'gray', borderWidth: 1, marginBottom: 15}}
      onChangeText={guess => setGuess(guess)}
      value={guess}/>
      <Button
      color="#000000"
      title='Make a guess' onPress={makeAguess}
      />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
