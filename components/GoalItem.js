import { StyleSheet, Text, View, Button, Pressable } from 'react-native'
import React from 'react'
import PressableButton from './PressableButton';
import { EvilIcons } from '@expo/vector-icons';

export default function GoalItem({ goalObj, deleteFunction, detailFunction }) {
    function deleteHandler() {
        deleteFunction(goalObj.id);
    }

    return (

        <View> 
            <Pressable 
                style={({pressed}) => [styles.textContainer, pressed && styles.pressed]}
                onPress={() => detailFunction(goalObj)} 
                android_ripple={{color:"#e9e"}}>
                    <Text style={styles.text}>{goalObj.text}</Text>
                    <View style={styles.buttonContainer}>
                        {/* <Button color={"black"} title='X' onPress={deleteHandler}/> */}
                        <PressableButton customStyle={styles.deleteButton} onPressFunction={deleteHandler}>
                        <EvilIcons name="trash" size={36} color="black" />
                        </PressableButton>
                    </View>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    pressed: {
        opacity: 0.5,
        backgroundColor: 'yellow',
    },
    text: {
        textAlign: 'center',
        fontSize: 30,
        color: '#929',
        padding: 5,
        margin: 5,
    },
    textContainer: {
        borderRadius: 10,
        backgroundColor: '#aaa',
        marginTop: 35,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    buttonContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    deleteButton: {
        borderRadius: 5,
    }
})