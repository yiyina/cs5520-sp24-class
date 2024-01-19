import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

export default function GuessNumber({ guessNumber, errorNumber, getGuessNumber }) {
  return (
    <View style={styles.container}>
        <Text style={styles.numberText}>Enter a Number</Text>
            <TextInput 
                style={styles.numberInput} 
                value={guessNumber}
                onChangeText={getGuessNumber}
            />
        <Text style={styles.errorAlert}>{errorNumber}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center',
    },
    numberText: {
        width: '100%',
        color: 'purple',
        marginBottom: 10,
        marginTop: 40,
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
})