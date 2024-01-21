import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'

/*
 * Function: getColorStyle
 * Purpose: get the color style based on the color prop
 * Parameters: color
 * Return: color style
 */
const getColorStyle = (color) => {
    switch (color) {
        case 'red':
            return styles.red;
        case 'blue':
            return styles.blue;
        case 'white':
            return styles.white;
        default:
            return styles.black;
    }
}

/* 
 * Function: Button
 * Purpose: render a button
 * Parameters: text, onPress, color
 * Return: a button
 */
export default function Button({ text, onPress, color }) {
    const textColor = getColorStyle(color);
  return (
    <TouchableOpacity onPress={onPress}>
        <Text style={[styles.buttonText, textColor, styles.margin]}>{text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    red: {
        color: 'red',
    },
    blue: {
        color: 'blue',
    },
    white: {
        color: 'white',
    },
    margin: {
        marginBottom: 10,
        marginTop: 10,
    },
})