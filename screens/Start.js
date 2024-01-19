import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native'
import React from 'react'
import CheckBox from 'expo-checkbox';

export default function StartScreen() {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Guess My Number</Text>
        <View style={styles.card}>
          <Text style={styles.text}>Name</Text>
          <TextInput style={styles.nameLine}></TextInput>
          <Text style={styles.text}>Enter a Number</Text>
          <TextInput style={styles.numberLine}></TextInput>
          <View style={styles.checkboxContainer}>
            <CheckBox style={styles.checkbox}/>
            <Text>I am not a robot</Text>
          </View>
          <View style={styles.submitContainer}>
            <TouchableOpacity>
              <Text>Reset</Text>
            </TouchableOpacity>

            <TouchableOpacity>
              <Text>Submit</Text>
            </TouchableOpacity>
          </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    paddingTop: 60,
    width: '100%',
    alignItems: 'center',
  },
  title: {
    color: 'purple',
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 20,
  },
  card: {
    backgroundColor: 'darkgray',
    width: 300,
    height: 400,
    padding: 20,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOffset: {width: 2, height: 2},
    shadowRadius: 6,
    shadowOpacity: 0.5,
    elevation: 10,
    margin: 20,
    alignItems: 'center', // 垂直居中
  },
  text: {
    width: '100%',
    color: 'purple',
    marginBottom: 10,
  },
  nameLine: {
    borderBottomWidth: 2,
    borderBottomColor: 'purple',
    width: '100%',
    marginBottom: 40,
  },
  numberLine: {
    borderBottomWidth: 2,
    borderBottomColor: 'purple',
    width: '100%',
    marginBottom: 40,
  },
  checkboxContainer: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  checkbox: {
    marginRight: 10,
  },
  submitContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    width: '70%',
  },
  
})