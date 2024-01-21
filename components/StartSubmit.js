import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Button from './Button'

/*
 * Function: StartSubmit
 * Purpose: render the submit buttons
 * Parameters: isCheckBoxChecked, handleResetButtonPress, handleConfirmButtonPress
 * Return: submit buttons
 */
export default function StartSubmit({ isCheckBoxChecked, handleResetButtonPress, handleConfirmButtonPress }) {
  return (
    <View style={styles.submitContainer}>
        <TouchableOpacity>
            <Text style={styles.resetButton} onPress={handleResetButtonPress}>Reset</Text>
        </TouchableOpacity>
        {isCheckBoxChecked ? 
            <Button text={'Confirm'} onPress={handleConfirmButtonPress} color={'blue'}/>
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