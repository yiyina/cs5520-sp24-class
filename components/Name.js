import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

export default function Name({ userName, errorName, getUserName}) {
  return (
    <View style={styles.container}>
      <Text style={styles.nameText}>Name</Text>
            <TextInput 
                style={styles.nameInput}
                value={userName}
                onChangeText={getUserName}
            />
        <Text  ext style={styles.errorAlert}>{errorName}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center',
    },
    nameText: {
        width: '100%',
        color: 'purple',
        marginBottom: 10,
    },
    nameInput: {
        borderBottomWidth: 2,
        borderBottomColor: 'purple',
        width: '100%',
        color: 'purple',
        fontWeight: 'bold',
        paddingBottom: 10,
        textAlign: 'center',
    },
    errorAlert: {
        color: 'black',
        width: '100%',
    },
})