import { StyleSheet, Text, View, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { getAllDocs, writeToDB } from '../firebase-files/firebaseHelper';

export default function GoalUsers ({ id }) {
    const [goals, setGoals] = useState([]);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        async function fetchUsers() {
            try {
                const usersFromDB = await getAllDocs(`goals/${id}/users`);
                console.log(usersFromDB);
                if (usersFromDB.length) {
                setUsers(usersFromDB);
                return;
                }
                const response = await fetch(
                "https://jsonplaceholder.typicode.com/users"
                );
                if (!response.ok) {
                throw new Error("data wasn't there!"); // automatically exit
                }
                const data = await response.json();
                data.forEach((element) => {
                    // writeToDB(element, `goals/${id}Users/`);
                    writeToDB(element, "goals", id, "users");
                });
                // console.log(data);
                if(usersFromDB.length) {
                    setGoals(data); 
                    return;
                }
            }
            catch (error) {
                console.error(error);
            }
        }
        fetchUsers(); 
    }, []);

    return (
        <View>
            <Text>GoalUsers</Text>
            <FlatList 
                contentContainerStyle={styles.scrollViewContent}
                data={goals} 
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => { 
                    console.log(item);
                    return <Text>{item.name}</Text>
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({})
