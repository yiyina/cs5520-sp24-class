import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { useState } from 'react';
import CheckBox from 'expo-checkbox';
import Name from '../components/Name';
import GuessNumber from '../components/GuessNumber';

export default function StartScreen() {
  const [isCheckBoxChecked, setIsCheckBoxChecked] = useState(false);
  const [userName, setUserName] = useState("");
  const [guessNumber, setGuessNumber] = useState("");
  const [errorName, setErrorName] = useState("");
  const [errorNumber, setErrorNumber] = useState("");

  const handleCheckBoxChange = () => {
    setIsCheckBoxChecked(!isCheckBoxChecked);
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

  return (
    <View style={styles.container}>
        <Text style={styles.title}>Guess My Number</Text>
        <View style={styles.card}>
          <Name userName={userName} errorName={errorName} getUserName={getUserName}/>
          <GuessNumber guessNumber={guessNumber} errorNumber={errorNumber} getGuessNumber={getGuessNumber}/>

          <View style={styles.checkboxContainer}>
            <CheckBox 
              style={styles.checkbox}
              value={isCheckBoxChecked}
              onValueChange={handleCheckBoxChange}/>
            <Text>I am not a robot</Text>
          </View>
          <View style={styles.submitContainer}>
            <TouchableOpacity>
              <Text style={styles.resetButton}>Reset</Text>
            </TouchableOpacity>
            {isCheckBoxChecked ? 
              <TouchableOpacity>
                <Text 
                  style={styles.submitButton}
                  onPress={handleConfirmButtonPress}
                >Confirm</Text>
              </TouchableOpacity> :
              <Text style={styles.disabledSubmitButton}>Confirm</Text>
            }
          </View>
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
  checkboxContainer: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginTop: 30,
  },
  checkbox: {
    marginRight: 10,
  },
  submitContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    width: '70%',
  },
  resetButton: {
    color: 'red',
  },
  submitButton: {
    color: 'blue',
  },
  disabledSubmitButton: {
    color: 'white',
  }
})