import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Header({ name, children }) {
    console.log(name)
    return (
        <View>
            <Text style={styles.button}>Welcome to {name}!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        color: 'darkmagenta',
        fontSize: 20,
        borderColor: 'darkmagenta',
        borderWidth: 2,
        padding: 5,
        borderRadius: 5,
    }
})