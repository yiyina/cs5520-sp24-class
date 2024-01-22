import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Button from '../components/Button'

export default function Final({ gameResult, guessNumber, startAgain }) {
    console.log("Current guess number:", guessNumber);
    
    const imgUrl = `https://picsum.photos/id/${guessNumber}/100/100`;
    const sadFaceImg = require('../assets/sadface.png');

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Game is Over</Text>
            <View style={styles.card}>
                <Text style={styles.text}>Here's your picture</Text>
                {gameResult ? 
                    <Image source={{uri: imgUrl}} style={styles.image} />
                : 
                    <Image source={sadFaceImg} style={styles.image} />
                }
                <Button text={'Start Again'} onPress={startAgain} color={'blue'} />
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
        width: '60%',
        height: '30%',
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
    image: {
        marginTop: 10,
        width: '60%',
        height: '60%',
    },
    text: {
        fontWeight: 'bold',
        fontSize: 20,
        width: '100%',
        color: 'purple',
        marginBottom: 10,
        textAlign: 'center',
    },
})