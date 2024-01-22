import { StyleSheet, Text, View } from 'react-native'
import { useState, useEffect } from 'react';
import React from 'react'
import Button from '../components/Button';

export default function Game({ userName, guessNumber, theNumber, count, setCount, closeModal, onGameEnd }) {
    const [win, setWin] = useState(false);
    const [message, setMessage] = useState("");

    /*
     * useEffect hook is called after the component is rendered
     */
    useEffect(() => {
        console.log("useEffect triggered", { guessNumber, theNumber, count });
        if (guessNumber && userName) { 
            compareNumbers();
        }
    }, [guessNumber, theNumber, count]);

    function handleGameOver() {
        console.log("Game handleGameOver called");
        onGameEnd(win);
    }

    /* 
     * Function: compareNumbers
     * Purpose: compare the user's guess number with the random number
     * Parameters: none
     * Return: none
     */
    function compareNumbers () {
        console.log("Game compareNumbers called");
        console.log("User name: " + userName + ", Guess number: " + guessNumber + " The number is: " + theNumber + " Count: " + count);
        if (parseInt(guessNumber) === theNumber) {
            setWin(true);
            setMessage("Congrats " + userName + "! You Won!");
            setCount(0);
            // handleGameOver();
        } else if (count === 0) {
            // setGameOver(true);
            setMessage("Hello " + userName + "\nYou have chosen " + guessNumber + "\nThat's not my number!\nYou have no attempts left!");
        } else {
            let hint = guessNumber < theNumber ? "Guess higher!" : "Guess lower!";
            setMessage("Hello " + userName + "\nYou have chosen " + guessNumber + "\nThat's not my number!\n" + hint + "\nYou have " + count + " attempts left!");
        }
    }

    /*
     * Function: handleTryAgain
     * Purpose: handle the 'Let Me Guess Again' button press 
     * Parameters: none
     * Return: none
     */
    function handleTryAgain() {
        closeModal();
    }

    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.resultsText}>
                    {message}
                </Text>
                {win ? 
                    <Button text={'Thank you!'} onPress={handleGameOver} color={'blue'}/>
                : 
                <>
                    <Button text="I am done" onPress={handleGameOver} color={"red"} /> 
                    <Button text="Let Me Guess Again" onPress={handleTryAgain} color={"blue"} />
                </>
                }
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
    card: {
        width: '80%',
        backgroundColor: 'darkgray',
        padding: 20,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOffset: {width: 2, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.5,
        elevation: 10,
        marginTop: 200, 
        alignItems: 'center', 
        justifyContent: 'center',
    },
    resultsText: {
        color: 'purple',
        textAlign: 'center',
        fontSize: 20,
        marginBottom: 10,
    },
    done: {
        color: 'red',
        marginBottom: 10,
        textAlign: 'center',
    },
    playAgain: {
        color: 'blue',
        textAlign: 'center',
        marginTop: 10,
    },
    thanks: {
        color: 'blue',
    }
})