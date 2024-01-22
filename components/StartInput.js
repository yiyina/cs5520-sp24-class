import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import colors from './Colors';

export default function StartInput({ textInput, errorMessage, getInput, value }) {
  return (
    <View style={styles.container}>
        <Text style={styles.text}>{textInput}</Text>
            <TextInput 
                style={styles.inputLine} 
                value={value}
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
        color: colors.text,
        marginBottom: 10,
    },
    inputLine: {
        borderBottomWidth: 2,
        borderBottomColor: colors.text,
        width: '100%',
        color: colors.text,
        fontWeight: 'bold',
        paddingBottom: 10,
        textAlign: 'center',
    },
    errorAlert: {
        color: colors.default,
        width: '100%',
    },
})