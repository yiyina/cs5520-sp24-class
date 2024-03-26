import { StyleSheet, Text, Button } from 'react-native'
import React, { useState, useEffect } from 'react'
import Home from './components/Home'
import GoalDetails from './components/GoalDetails'
import Signup from './components/Signup'
import Login from './components/Login'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase-files/firebaseSetup'
import PressableButton from './components/PressableButton'
import Profile from './components/Profile'
import { Ionicons } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons'

const Stack = createNativeStackNavigator();
export default function App() {
  const [userLoggedIn, setUserLoggedIn] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        // const uid = user.uid;
        setUserLoggedIn(true);
        // ...
      } else {
        // User is signed out
        // ...
        setUserLoggedIn(false);
      }
    });
  }, []);
  const AuthStack = (
    <>
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Login" component={Login} />
    </>
  );
  const AppStack = (
    <>
      <Stack.Screen
        options={({ navigation }) => {
          return {
            headerTitle: "All My Goals",
            headerRight: () => {
              return (
                <PressableButton
                  onPressFunction={() => {
                    navigation.navigate("Profile");
                  }}
                >
                  <Ionicons name="person" size={24} color="white" />
                </PressableButton>
              );
            },
          };
        }}
        name="Home"
        component={Home}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          headerRight: () => {
            return (
              <PressableButton
                onPressFunction={() => {
                  try {
                    signOut(auth);
                  } catch (err) {
                    console.log(err);
                  }
                }}
              >
                <AntDesign name="logout" size={24} color="white" />
              </PressableButton>
            );
          },
        }}
      />
      <Stack.Screen
        options={({ route }) => {
          return {
            headerTitle: route.params ? route.params.data.text : "Details",
          };
        }}
        name="Details"
        component={GoalDetails}
      />
    </>
  );
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Signup"
        screenOptions={{
          headerStyle: { backgroundColor: "#929" },
          headerTintColor: "white",
        }}
      >
        {userLoggedIn ? AppStack : AuthStack}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});