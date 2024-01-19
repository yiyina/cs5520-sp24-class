import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

export default function StartSubmit({ isCheckBoxChecked, handleResetButtonPress, handleConfirmButtonPress }) {
  return (
    <View style={styles.submitContainer}>
        <TouchableOpacity>
            <Text style={styles.resetButton} onPress={handleResetButtonPress}>Reset</Text>
        </TouchableOpacity>
        {isCheckBoxChecked ? 
            <TouchableOpacity>
            <Text 
                style={styles.submitButton}
                onPress={handleConfirmButtonPress}
            >Confirm</Text>
            </TouchableOpacity> :
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
    },
    submitButton: {
        color: 'blue',
    },
    disabledSubmitButton: {
        color: 'white',
    }
})