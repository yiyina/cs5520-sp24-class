import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import Button from '../components/Button'
import colors from '../components/Colors';

export default function Final({ gameResult, guessNumber, startAgain }) {
    console.log("Current guess number:", guessNumber);
    
    const imgUrl = `https://picsum.photos/id/${guessNumber}/100/100`;
    const sadFaceImg = require('../assets/sadface.png');

    return (
        <LinearGradient 
            style={styles.container}
            colors={['#D8BFD8', '#A670C0']}
            start={[0.5, 0]}
            end={[0.5, 1]}>
            <Text style={styles.title}>Game is Over</Text>
            <View style={styles.card}>
                <Text style={styles.text}>Here's your picture</Text>
                {gameResult ? 
                    <Image source={{uri: imgUrl}} style={styles.image} />
                : 
                    <Image source={sadFaceImg} style={styles.image} />
                }
                <Button text={'Start Again'} onPress={startAgain} color={'confirm'} />
            </View>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        paddingTop: 60,
        width: '100%',
        alignItems: 'center',
    },
    title: {
        color: colors.text,
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 20,
    },
    card: {
        backgroundColor: colors.card,
        width: '70%',
        height: '40%',
        padding: 20,
        borderRadius: 10,
        shadowColor: colors.shadow,
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
        resizeMode: 'contain', // show the whole image
    },
    text: {
        fontWeight: 'bold',
        fontSize: 20,
        width: '100%',
        color: colors.text,
        marginBottom: 10,
        textAlign: 'center',
    },
})