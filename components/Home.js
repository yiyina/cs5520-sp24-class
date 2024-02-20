import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, SafeAreaView, View, ScrollView, FlatList, Pressable, Alert } from 'react-native';
import { useState, useEffect } from 'react';
import Header from './Header';
import Input from './Input';
import GoalItem from './GoalItem';
import { useNavigation } from '@react-navigation/native';
import PressableButton from './PressableButton';
import { collection, onSnapshot } from 'firebase/firestore';
import { database } from '../firebase-files/firebaseSetup';
import { writeToDB, deleteFromDB } from '../firebase-files/firebaseHelpers';

export default function Home() {
  useEffect(() => {
    // set up a listener to get realtime date from firestore - only after the first render
    onSnapshot(collection(database, "goals"), (querySnapshot) => {
      if (querySnapshot.empty) {
        console.log("No goals found");
        // Alert.alert("No goals found");
        return;
      }
      let newArray = [];
      let newArray1 = [];
      querySnapshot.forEach((doc) => {
        console.log(doc.data());
        // store this data in a new array
        let newGoal = { text: doc.data().text, id: doc.id };
        newArray.push({ ...doc.data(), id: doc.id });
        newArray1.push(newGoal);
      });
      console.log("newArray: ", newArray);
      console.log("newArray1: ", newArray1);
      setGoals(newArray1);
      // update the state with the new array
    });
  }, []);
  
  const navigation = useNavigation();
  const appName = "MyApp";
  const [text, setText] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [goals, setGoals] = useState([]);

  function receiveInput(data) {
    console.log("Receive input", data);
    // setText(data);
    // 1. define a new object{text:..., id:...} and store data in it
    // const newGoal = {text: data, id: Math.random()};
    // don't need id anymore, because it's being generated in the writeToDB function
    const newGoal = { text: data };
    // 2. store the new object in an array
    // let newArray = [...goals, newObject];
    console.log(newGoal);
    // 3. update the state with the new array
    setGoals((currentGoals) => {return [...currentGoals, newGoal]});
    setIsModalVisible(false);
    writeToDB(newGoal);
  }
  
  function showModal() {
    setIsModalVisible(true);
  }

  function dismissModal() {
    setIsModalVisible(false);
  }

  function goalDeleteHandler(id) {
    console.log("Delete item", id);
    // setGoals((currentGoals) => {
    //   return currentGoals.filter((goal) => goal.id != id); 
    // });
    deleteFromDB(id.toString());
    setGoals(currentGoals => currentGoals.filter(goal => goal.id !== id));

  }

  function goalPressHandler(goalItem) {
    console.log("Goal pressed");
    console.log(navigation);
    navigation.navigate("Details", {goalData: goalItem})
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.topView}>
        <Header name={appName} version={2} />
        <PressableButton 
          customStyle={styles.addButton} 
          onPressFunction={()=> setIsModalVisible(true)}
          pressedStyle={styles.pressedButton}>
          <Text>Add a goal</Text>
        </PressableButton>
        {/* <Button title="Add a goal" onPress={showModal}/> */}
        <Input 
          inputHandler={receiveInput} 
          modalVisible={isModalVisible}
          dismissModal={dismissModal} 
        />
      </View>
      <View style={styles.bottomView}>
        <FlatList 
          contentContainerStyle={styles.scrollViewContent}
          data={goals} 
          renderItem={({ item })=>{
            console.log(item);
            return (
              <GoalItem 
                goalObj={item} 
                deleteFunction={() => goalDeleteHandler(item.id)} 
                detailFunction={goalPressHandler}
              />
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
  },
  addButton: {
    backgroundColor: '#979',
    marginTop: 10,
  },
  pressedButton: {
    backgroundColor: 'yellow',
    opacity: 0.5,
  }
});
