import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'

export default function PressableButton({ customStyle, onPressFunction, pressedStyle, children }) {
  return (
    <Pressable 
        style={(pressed) => [styles.defaultStyle, customStyle, pressed && styles.pressed]} 
        onPress={onPressFunction}>
        <View>
            {children}
        </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
    defaultStyle: {
        margin: 10,
        padding: 10,
        backgroundColor: '#aaa',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    pressed: {
        backgroundColor: 'lightpink',
    },
})