import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import colors from './Colors';

/* 
 * Function: Button
 * Purpose: render a button
 * Parameters: text, onPress, color
 * Return: a button
 */
export default function Button({ text, onPress, color }) {
    const textColor = {color: colors[color] || colors.black};

    return (
        <TouchableOpacity onPress={onPress}>
            <Text style={[textColor, styles.margin]}>{text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    margin: {
        marginBottom: 10,
        marginTop: 10,
        fontSize: 18,
    },
})