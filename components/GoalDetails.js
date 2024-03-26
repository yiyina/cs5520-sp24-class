import { StyleSheet, Text, View, Button, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
// import { useNavigation } from '@react-navigation/native'
import GoalUsers from './GoalUsers'
import { storage } from '../firebase-files/firebaseSetup'
import { ref, getDownloadURL } from 'firebase/storage'
import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry'
import LocationManager from './LocationManager'


export default function GoalDetails({ navigation, route }) {
    const [warning, setWatning] = useState(false);
    const [imageURL, setImageURL] = useState("");
    function warningHandler() {
        console.log("warning");
        setWatning(true);
    }
    // functions inside useEffect are called after the rendering
    useEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return <Button title="Warning" color="gray" onPress={warningHandler} />;
            },
        });
    }, []);

    useEffect(() => {
        async function getImageURL () {
        if (route.params.data) {
                console.log("GoalDetails.js: ", route.params.data.imageUri);
                const imageUri = route.params.data.imageUri;
                const imageRef = ref(storage, imageUri);
                const url = await getDownloadURL(imageRef);
                console.log("URL: ", url);
                setImageURL(url);
            }
        }
        getImageURL();
    }, []);

    return (
        <View>
            {route.params ? (
                <Text>
                    You are viewing details of {route.params.data.text} with id{" "}
                    {route.params.data.id}
                </Text>
            ) : (
                <Text> "Extra details"</Text>
            )}
            <LocationManager />
            {imageURL && <Image source={{ uri: imageURL }} style={{ width: 200, height: 200 }} /> }
            {warning && <Text style={{ color: "red" }}>WARNING</Text>}
            <Button
                title="extra details"
                onPress={() => navigation.push("Details")}
            />
            <GoalUsers id={route.params.data.id} />
        </View>
    );
}

const styles = StyleSheet.create({});