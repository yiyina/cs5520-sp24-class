import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Header({ name, children }) {
    console.log(name)
    return (
        <View>
        <Text>Welcome to {name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({})