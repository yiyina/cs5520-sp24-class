import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, SafeAreaView, View } from 'react-native';
import Header from './components/Header';
import { useState } from 'react';
import Input from './components/Input';

export default function App() {
  const appName = "MyApp";
  const [text, setText] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);

  function receiveInput(data) {
    console.log("Receive input", data);
    setText(data);
    setIsModalVisible(false);
  }
  function showModal() {
    setIsModalVisible(true);
  }

  function dismissModal() {
    setIsModalVisible(false);
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.topView}>
        <Header name={appName} version={2} />
        <Button title="Add a goal" onPress={showModal}/>
        <Input 
          inputHandler={receiveInput} 
          modalVisible={isModalVisible}
          dismissModal={dismissModal}/>
      </View>
      <View style={styles.bottomView}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  topView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomView: {
    flex: 4,
    backgroundColor: 'lightpink',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    fontSize: 20,
    backgroundColor: 'purple',
    color: 'white',
    padding: 5,
    marginTop: 5,
  }
});
