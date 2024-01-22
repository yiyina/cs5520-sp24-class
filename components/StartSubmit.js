import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Button from './Button'

/*
 * Function: StartSubmit
 * Purpose: render the submit buttons
 * Parameters: isCheckBoxChecked, resetButtonPress, confirmButtonPress
 * Return: submit buttons
 */
export default function StartSubmit({ isCheckBoxChecked, resetButtonPress, confirmButtonPress }) {
  return (
    <View style={styles.submitContainer}>
        <TouchableOpacity>
            <Text style={styles.resetButton} onPress={resetButtonPress}>Reset</Text>
        </TouchableOpacity>
        {isCheckBoxChecked ? 
            <Button text={'Confirm'} onPress={confirmButtonPress} color={'blue'}/>
         :
            <Text style={styles.disabledSubmitButton}>Confirm</Text>
        }
    </View>
  )
}

const styles = StyleSheet.create({
    submitContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        width: '70%',
    },
    resetButton: {
        color: 'red',
        marginTop: 10,
    },
    submitButton: {
        color: 'blue',
    },
    disabledSubmitButton: {
        color: 'white',
        marginTop: 10,
    }
})