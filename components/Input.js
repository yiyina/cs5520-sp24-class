import { Button, StyleSheet, View, TextInput } from 'react-native'
import React from 'react'
import { useState } from 'react';

export default function Input({ inputHandler }) {
    const [text, setText] = useState("");

    // callback handler
    function changeTextHandler(changedText) {
        console.log("User is typing..." + changedText);
        setText(changedText);
    }
    function confirmHandler() {
        inputHandler(text)
    }
    return (
        <View>
            <TextInput 
                placeholder="Type something..."
                style={styles.input} 
                value={text} 
                onChangeText={changeTextHandler}
            />
            <Button title='Confirm' onPress={confirmHandler} />
        </View>
    )
}

const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 2,
    borderBottomColor: 'purple',
    width: '50%',
  },
});