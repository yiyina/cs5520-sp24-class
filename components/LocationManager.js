import { StyleSheet, Button, View, Image, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import * as Location from 'expo-location'
import { GOOGLE_API } from '@env'

export default function LocationManager() {
    const [status, requestPermission] = Location.useForegroundPermissions();
    const [location, setLocation] = useState(null);
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

    const locateUserHandler = async () => {
        try {
            const havePermission = await verifyPermission();
            if (!havePermission) {
                console.log('Permission not granted');
                return;
            }
            const location = await Location.getCurrentPositionAsync();
            setLocation({
                latitude: location.coords.latitude,
                longitude: location.coords.longitude
            })
            console.log(location.coords.latitude);
            console.log(location.coords.longitude);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        console.log(location);
    }, [location]);

    return (
        <View>
            <Button title='Locate me' onPress={locateUserHandler} />
            {location &&
                <Image
                    style={styles.image}
                    source={{ uri: `https://maps.googleapis.com/maps/api/staticmap?center=${location.latitude},${location.longitude}&zoom=14&size=400x200&maptype=roadmap&markers=color:red%7Clabel:L%7C${location.latitude},${location.longitude}&key=${GOOGLE_API}` }}
                />
            }
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        width: Dimensions.get('screen').width,
        height: Dimensions.get('screen').height * 0.2,
    }
})