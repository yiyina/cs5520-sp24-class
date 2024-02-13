import { StyleSheet, Text, Button } from 'react-native'
import React from 'react'
import Home from './components/Home'
import GoalDetails from './components/GoalDetails'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator();
console.log(Stack);

function warningHandler() {
  console.log("Warning");
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
          headerStyle: {backgroundColor: '#929'}, 
          headerTintColor: 'white',}}>
        <Stack.Screen options={{headerTitle: 'All My Goals'}} name="Home" component={Home} />
        <Stack.Screen options={({ route }) => ({
          headerTitle: route.params ? route.params.goalData.text : "Details",
          headerRight: ()=> {
            return <Button title="Warning" color="gray" onPress={warningHandler}/>
          }})} name="Details" component={GoalDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({})