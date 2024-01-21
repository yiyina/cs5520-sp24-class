import { Modal, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react';
import StartCheckBox from '../components/StartCheckBox';
import StartSubmit from '../components/StartSubmit';
import Game from './Game';
import StartInput from '../components/StartInput';

/* 
 * Function: StartScreen
 * Purpose: render the start screen
 * Parameters: none
 * Return: the start screen
 */
export default function StartScreen() {
  const [isCheckBoxChecked, setIsCheckBoxChecked] = useState(false);
  const [userName, setUserName] = useState("");
  const [guessNumber, setGuessNumber] = useState("");
  const [theNumber, setTheNumber] = useState(0); 
  const [errorName, setErrorName] = useState("");
  const [errorNumber, setErrorNumber] = useState("");
  const [count, setCount] = useState(3);
  const [modalVisible, setModalVisible] = useState(false);

  const handleCheckBoxChange = () => {
    console.log("handleCheckBoxChange called")
    setIsCheckBoxChecked(!isCheckBoxChecked);
    console.log(isCheckBoxChecked)
  }

  function getUserName (name) {
    setUserName(name);
  }

  function getGuessNumber (number) {
    setGuessNumber(number);
  }

  /*
   * Function: getRandomNumber 
   * Purpose: get a random number between 1020 and 1029
   * Parameters: none
   * Return: a random number between 1020 and 1029
   */
  function getRandomNumber () {
    console.log("getRandomNumber called")
    const min = 1020;
    const max = 1029;
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNumber;
  }

  /* 
   * Function: handleConfirmButtonPress
   * Purpose: handle the 'Confirm' button press
   * Parameters: none
   * Return: none
   */
  function handleConfirmButtonPress () {
    let isValid = true;
    setErrorName("");
    setErrorNumber("");

    if (userName.length <= 1 || !/^[a-zA-Z]+$/.test(userName)) {
      setErrorName("Please enter a valid name");
      setUserName("");
      isValid = false;
    }

    const parsedNumber = parseInt(guessNumber, 10);
    if (!isNaN(parsedNumber) && (parsedNumber < 1020 || parsedNumber > 1029)) {
      setErrorNumber("Please enter a valid number between 1020 and 1029");
      setGuessNumber("");
      isValid = false;
    }
    
    if (isValid) {
      if (count === 0 || count === 3) {
        // Start a new game
        const newNumber = getRandomNumber();
        setTheNumber(newNumber);
        setCount(2);  // Set to 2 because this attempt will count as the first one
        console.log(`New game started. The number is ${newNumber}`);
      } else {
        setCount(count - 1);  // Deduct one attempt every time the user clicks the 'Confirm' button
      }
      setIsCheckBoxChecked(false);
      setModalVisible(true);
    }
  }

  function handleResetButtonPress () {
    setUserName("");
    setGuessNumber("");
  }

  return (
    <View style={styles.container}>
        <Text style={styles.title}>Guess My Number</Text>
        <View style={styles.card}>
          <StartInput textInput={"Name"} errorMessage={errorName} getInput={getUserName}/>
          <StartInput textInput={"Guess a Number"} errorMessage={errorNumber} getInput={getGuessNumber}/>
          <StartCheckBox isCheckBoxChecked={isCheckBoxChecked} handleCheckBox={handleCheckBoxChange} />
          <StartSubmit isCheckBoxChecked={isCheckBoxChecked} handleResetButtonPress={handleResetButtonPress} handleConfirmButtonPress={handleConfirmButtonPress}/>
          <Modal visible={modalVisible}>
            <Game 
              userName={userName} 
              guessNumber={guessNumber} 
              theNumber={theNumber} 
              count={count}
              setCount={setCount}
              // updateGameStatus={updateGameStatus}
              closeModal={() => setModalVisible(false)}/>
          </Modal>
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