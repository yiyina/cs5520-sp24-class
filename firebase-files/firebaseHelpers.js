import { addDoc, doc, deleteDoc, collection } from "firebase/firestore";
import { database } from "./firebaseSetup";

export async function writeToDB(data) {
    try {
        const docRef = await addDoc(collection(database, "goals"), data);
        console.log("Data has been successfully written to the database:", data);
    } 
    catch (error) {
        console.error("Error adding document: ", error);
    }
}

export async function deleteFromDB(key) {
    try {
        // delete the document with the given id from the database
        await deleteDoc(doc(database, "goals", key));
    }
    catch (error) {
        console.error("Error deleting document: ", error);
    }
}

