import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'

export default function PressableButton({ customStyle, onPressFunction, pressedStyle, children }) {
  return (
    <Pressable 
        style={({pressed}) => [
            styles.defaultStyle, 
            customStyle, 
            pressed && pressedStyle
        ]} 
        onPress={onPressFunction}>
        <View>
            {children}
        </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
    defaultStyle: {
        borderRadius: 5,
        padding: 5,
        backgroundColor: "#aaa",
    },
    // pressed: {
    //     opacity: 0.5,
    // },
})