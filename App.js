import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, SafeAreaView, View, ScrollView, FlatList } from 'react-native';
import Header from './components/Header';
import { useState } from 'react';
import Input from './components/Input';
import GoalItem from './components/GoalItem';

export default function App() {
  const appName = "MyApp";
  const [text, setText] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [goals, setGoals] = useState([]);

  function receiveInput(data) {
    console.log("Receive input", data);
    // setText(data);
    // 1. define a new object{text:..., id:...} and store data in it
    const newGoal = {text: data, id: Math.random()};
    // 2. store the new object in an array
    // let newArray = [...goals, newObject];
    console.log(newGoal);
    // 3. update the state with the new array
    setGoals((currentGoals) => {return [...currentGoals, newGoal]});
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
        <FlatList 
          contentContainerStyle={styles.scrollViewContent}
          data={goals} 
          renderItem={({ item })=>{
            console.log(item);
            return (
              <GoalItem goalObj={item} />
            );
        }}>

        </FlatList>
        {/* <ScrollView contentContainerStyle={styles.scrollViewContent}>
          { goals.map((goal) => 
            <View style={styles.textContainer}>
              { text ? <Text style={styles.text}>{goals}</Text> : null }
              { text && <Text style={styles.text}>{text}</Text> }
              <Text key={goal.id} style={styles.text}>{goal.text}</Text>
            </View>
          )}
        </ScrollView> */}
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
  scrollViewContent: {
    alignItems: 'center',
  },
  bottomView: {
    flex: 4,
    backgroundColor: 'lightpink',
    // alignItems: 'center',
  },
  // text: {
  //   textAlign: 'center',
  //   fontSize: 30,
  //   color: 'white',
  //   padding: 5,
  //   marginTop: 5,
  // },
  // textContainer: {
  //   borderRadius: 10,
  //   backgroundColor: 'purple',
  //   marginTop: 35,
  // }
});
