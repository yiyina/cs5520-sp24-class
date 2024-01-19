import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useState, useEffect } from 'react';
import Name from '../components/Name';
import GuessNumber from '../components/GuessNumber';
import StartCheckBox from '../components/StartCheckBox';
import StartSubmit from '../components/StartSubmit';

export default function StartScreen() {
  const [isCheckBoxChecked, setIsCheckBoxChecked] = useState(false);
  const [userName, setUserName] = useState("");
  const [guessNumber, setGuessNumber] = useState("");
  const [errorName, setErrorName] = useState("");
  const [errorNumber, setErrorNumber] = useState("");

  useEffect(() => {
    console.log("isCheckBoxChecked has changed" + isCheckBoxChecked);
  }, [isCheckBoxChecked]);

  const handleCheckBoxChange = () => {
    console.log("handleCheckBoxChange called")
    setIsCheckBoxChecked(!isCheckBoxChecked);
    console.log(isCheckBoxChecked)
  }

  function getUserName (name) {
    console.log(name);
    setUserName(name);
  }

  function getGuessNumber (number) {
    console.log(number);
    setGuessNumber(number);
  }

  function handleConfirmButtonPress () {
    if (userName.length <= 1 || !/^[a-zA-Z]+$/.test(userName)) {
      setErrorName("Please enter a valid name");
      setUserName("");
    } else {
      setErrorName("");
    }

    const parsedNumber = parseInt(guessNumber, 10);
    if (!isNaN(parsedNumber) && (parsedNumber < 1020 || parsedNumber > 1029)) {
      setErrorNumber("Please enter a valid number between 1020 and 1029");
      setGuessNumber("");
    } else {
      setErrorNumber("");
    }
    console.log("User name: " + userName + ", Guess number: " + guessNumber);
  }
  function handleResetButtonPress () {
    setUserName("");
    setGuessNumber("");
  }

  return (
    <View style={styles.container}>
        <Text style={styles.title}>Guess My Number</Text>
        <View style={styles.card}>
          <Name userName={userName} errorName={errorName} getUserName={getUserName}/>
          <GuessNumber guessNumber={guessNumber} errorNumber={errorNumber} getGuessNumber={getGuessNumber}/>
          <StartCheckBox isCheckBoxChecked={isCheckBoxChecked} handleCheckBox={handleCheckBoxChange} />
          <StartSubmit isCheckBoxChecked={isCheckBoxChecked} handleResetButtonPress={handleResetButtonPress} handleConfirmButtonPress={handleConfirmButtonPress}/>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    paddingTop: 60,
    width: '100%',
    alignItems: 'center',
  },
  title: {
    color: 'purple',
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 20,
  },
  card: {
    backgroundColor: 'darkgray',
    width: 300,
    height: 400,
    padding: 20,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOffset: {width: 2, height: 2},
    shadowRadius: 6,
    shadowOpacity: 0.5,
    elevation: 10,
    margin: 20,
    alignItems: 'center', 
  },
})