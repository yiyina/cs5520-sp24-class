import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

export default function StartInput({ textInput, errorMessage, getInput }) {
  return (
    <View style={styles.container}>
        <Text style={styles.text}>{textInput}</Text>
            <TextInput 
                style={styles.inputLine} 
                onChangeText={getInput}
            />
        <Text style={styles.errorAlert}>{errorMessage}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center',
        marginBottom: 20,
    },
    text: {
        fontSize: 16,
        width: '100%',
        color: 'purple',
        marginBottom: 10,
    },
    inputLine: {
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