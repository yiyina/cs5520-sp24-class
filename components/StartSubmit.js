import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Button from './Button'
import colors from './Colors';

/*
 * Function: StartSubmit
 * Purpose: render the submit buttons
 * Parameters: isCheckBoxChecked, resetButtonPress, confirmButtonPress
 * Return: submit buttons
 */
export default function StartSubmit({ isCheckBoxChecked, resetButtonPress, confirmButtonPress }) {
  return (
    <View style={styles.submitContainer}>
        <Button text={'Reset'} onPress={resetButtonPress} color={'alert'}/>
        {isCheckBoxChecked ? 
            <Button text={'Confirm'} onPress={confirmButtonPress} color={'confirm'}/>
         :
            <Text style={styles.disableConfirmButton}>Confirm</Text>
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
    disableConfirmButton: {
        color: colors.disableConfirm,
        marginTop: 10,
        fontSize: 18,
    }
})