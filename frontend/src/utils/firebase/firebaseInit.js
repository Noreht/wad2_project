import firebaseConfig from "./firebaseConfig";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { arrayUnion, updateDoc, doc } from "firebase/firestore";

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Initialize Firebase Analytics
// const analytics = getAnalytics(firebaseApp);

// Initialize Firebase Auth & Firestore
export const auth = getAuth(firebaseApp);
export const db = getFirestore(firebaseApp);

//Firestore Functions
export const arrayunion = arrayUnion;
export const updatedoc = updateDoc;
export const document = doc;


export default firebaseApp;
