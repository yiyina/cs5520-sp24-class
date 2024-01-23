import { Button, Modal, StyleSheet, View, TextInput, Image } from 'react-native'
import React from 'react'
import { useState } from 'react';

export default function Input({ inputHandler, modalVisible, dismissModal }) {
    const [text, setText] = useState("");

    // callback handler
    function changeTextHandler(changedText) {
        console.log("User is typing..." + changedText);
        setText(changedText);
    }
    function confirmHandler() {
        inputHandler(text);
    }
    function cancelHandler() {
        dismissModal();
    }
    return (
        <Modal visible={modalVisible}>
            <View style={styles.container}>
                <Image 
                    source={{uri : "http://cdn-icons-png.flaticon.com/512/2617/2617812.png"}} 
                    style={styles.image} />
                {/* <Image 
                    source={require("../assets/icon.png")}
                    style={styles.image} /> */}
                <TextInput 
                    placeholder="Type something..."
                    style={styles.input} 
                    value={text} 
                    onChangeText={changeTextHandler}
                />
                <Button title='Confirm' onPress={confirmHandler} />
                <Button title='Cancel' onPress={cancelHandler} />
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ccc',
        alignItems: 'center',
        justifyContent: 'center',
    },  
    input: {
        borderBottomWidth: 2,
        borderBottomColor: 'purple',
        width: '50%',
    },
    image : {
        width: 100,
        height: 100,
    }
});