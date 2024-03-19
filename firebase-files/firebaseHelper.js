import {
    collection,
    addDoc,
    doc,
    deleteDoc,
    getDocs,
} from "firebase/firestore";
import { auth, database } from "./firebaseSetup";

export async function writeToDB(data, col, docId, subCol) {
    try {
        if (docId) {
            await addDoc(collection(database, col, docId, subCol), data);
        } else {
            if (col === "goals") {
                data = { ...data, owner: auth.currentUser.uid };
            }
            await addDoc(collection(database, col), data);
        }
    } catch (err) {
        console.log(err);
    }
}

export async function getAllDocs(path) {
    try {
        const querySnapshot = await getDocs(collection(database, path));
        let newArray = [];
        querySnapshot.forEach((doc) => {
            newArray.push(doc.data());
            console.log(doc.data());
        });
        return newArray;
    } catch (err) {
        console.log(err);
    }
}

export async function deleteFromDB(id) {
    try {
        await deleteDoc(doc(database, "goals", id));
    } catch (err) {
        console.log(err);
    }
}

export async function addUser(user) {
    try {
        const docRef = await addDoc(collection(firestore, "users"), {
            ...user,
            uid: auth.currentUser.uid,
        });
        console.log("Document written with ID: ", docRef.id);
        return docRef.id;
    } catch (error) {
        console.error("Error adding user: ", error);
        throw error;
    }
}