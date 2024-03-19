import { StyleSheet, Text, View, Button } from 'react-native'
import React, { useState, useEffect } from 'react'
// import { useNavigation } from '@react-navigation/native'
import GoalUsers from './GoalUsers'

export default function GoalDetails({ navigation, route }) {
    const [warning, setWarning] = useState(false);

    function warningHandler() {
        console.log("Warning");
        setWarning(true);
    }

    useEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return <Button title="Warning" color="gray" onPress={warningHandler}/>
        }});
    }, []);
    
    
    // const navigation = useNavigation();
    // console.log(route.params.goalData);
    return (
        <View>
        {route.params ? (
            <Text>
            You are viewing details of {route.params.goalData.text} with id{" "}
            {route.params.goalData.id}
            </Text>
        ) : (
            <Text> "Extra details"</Text>
        )}
        {warning && <Text style={{ color: "red" }}>WARNING</Text>}
        <Button
            title="extra details"
            onPress={() => navigation.push("Details")}
        />
        <GoalUsers id={route.params.goalData.id}/>
        </View>
    )
}

const styles = StyleSheet.create({})