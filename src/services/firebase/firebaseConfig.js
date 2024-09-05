import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyA-ZwkHaGyIUMjqsdO6_Vf5IlMZTK782ZE",
  authDomain: "alatabla-6a973.firebaseapp.com",
  projectId: "alatabla-6a973",
  storageBucket: "alatabla-6a973.appspot.com",
  messagingSenderId: "1014932528464",
  appId: "1:1014932528464:web:70a3cfc5d9f90dbd776055"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const getFirestoreInstance = () => {
  return getFirestore(app);
};
export const storage = getStorage(app);
//Initialize Firestore
export const db = getFirestore(app)