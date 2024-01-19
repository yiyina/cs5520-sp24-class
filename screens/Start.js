import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { useState } from 'react';
import CheckBox from 'expo-checkbox';

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
          <Text style={styles.nameText}>Name</Text>
          <TextInput 
            style={styles.nameInput}
            value={userName}
            onChangeText={getUserName}
          />
          <Text style={styles.errorAlert}>{errorName}</Text>

          <Text style={styles.numberText}>Enter a Number</Text>
          <TextInput 
            style={styles.numberInput} 
            value={guessNumber}
            onChangeText={getGuessNumber}
          />
          <Text style={styles.errorAlert}>{errorNumber}</Text>

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
  nameText: {
    width: '100%',
    color: 'purple',
    marginBottom: 10,
  },
  numberText: {
    width: '100%',
    color: 'purple',
    marginBottom: 10,
    marginTop: 40,
  },
  nameInput: {
    borderBottomWidth: 2,
    borderBottomColor: 'purple',
    width: '100%',
    color: 'purple',
    fontWeight: 'bold',
    paddingBottom: 10,
    textAlign: 'center',
  },
  numberInput: {
    borderBottomWidth: 2,
    borderBottomColor: 'purple',
    width: '100%',
    color: 'purple',
    fontWeight: 'bold',
    paddingBottom: 10,
    textAlign: 'center',
  },
  errorAlert: {
    color: 'black',
    width: '100%',
  },
  checkboxContainer: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  checkbox: {
    marginRight: 10,
    marginTop: 30,
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