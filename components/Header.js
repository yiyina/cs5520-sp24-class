import { StyleSheet, Text, View, windowWidth, useWindowDimensions } from 'react-native'
import React from 'react'

export default function Header({ name, children }) {
    const {height, width} = useWindowDimensions();
    const paddingVerticalDynamic = height < width ? 0: 5;

    console.log(name)
    return (
        <View>
            <Text style={[styles.button, paddingVerticalDynamic]}>Welcome to {name}!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        color: 'darkmagenta',
        fontSize: 20,
        borderColor: 'darkmagenta',
        borderWidth: 2,
        padding: windowWidth < 380 ? 5 : 10,
        borderRadius: 5,
    }
})