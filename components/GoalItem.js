import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function GoalItem({ goalObj }) {
  return (
    <View style={styles.textContainer}> 
        <Text style={styles.text}>{goalObj.text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    text: {
      textAlign: 'center',
      fontSize: 30,
      color: 'white',
      padding: 5,
      marginTop: 5,
    },
    textContainer: {
      borderRadius: 10,
      backgroundColor: 'purple',
      marginTop: 35,
    }
})