import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { useState } from 'react';
import StartScreen from './screens/Start';
import Header from './components/Header';
import Input from './components/Input';

export default function App() {
  const appName = "My First CS5520 Mobile App";
  // const [text, setText] = useState("");

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <StartScreen />
      {/* <Header name={appName} version={2} />
      <Input />
      <Text>{text}</Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
