import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import * as ImagePicker from 'expo-image-picker';
import PressableButton from './PressableButton';

export default function ImageManager({ receiveImageUri }) {
    const [status, requestPermission] = ImagePicker.useCameraPermissions();
    const [uri, setUri] = React.useState("");
    
    const verifyPermission = async () => {
        if (status.granted == true) {
            return true;
        }
        try {
            const permission = await requestPermission();
            return permission.granted;
        } catch (error) {
            console.log(error);
            return false;
        }
    }
    
    const tackImageHandler = async () => {
        try {
            const havePermission = await verifyPermission(); // Wait for permission to be granted
            if (!havePermission) {
                console.log('Permission not granted');
                return;
            }
            const result = await ImagePicker.launchCameraAsync({
                allowsEditing: true,
            });
            if (result.canceled) {
                console.log('Image picking cancelled');
                return;
            }
            setUri(result.assets[0].uri);
            receiveImageUri(result.assets[0].uri);
        } catch (error) {
            console.log(error);
        }   
    }

    return (
        <View>
            <PressableButton onPressFunction={tackImageHandler}>
                <Text>Take a picture</Text>
            </PressableButton>
            {uri && <Image source={{ uri: uri }} style={styles.image} />}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 200,
        height: 200,
        marginTop: 20,
        resizeMode: 'contain', // Adjust this based on your requirements
    },
});
