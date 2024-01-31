import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

export default function GoalItem({ goalObj, deleteFunction }) {
    function deleteHandler() {
        deleteFunction(goalObj.id);
    }

    return (
        <View style={styles.textContainer}> 
            <Text style={styles.text}>{goalObj.text}</Text>
            <View style={styles.buttonContainer}>
                <Button color={"white"} title='X' onPress={deleteHandler}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        textAlign: 'center',
        fontSize: 30,
        color: 'white',
        padding: 5,
        margin: 5,
    },
    textContainer: {
        borderRadius: 10,
        backgroundColor: 'purple',
        marginTop: 35,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    buttonContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
})