import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNzKu_Xm_j-34EA_cHSTSa_sb9SsDPQeI",
  authDomain: "where-s-waldo-f6739.firebaseapp.com",
  projectId: "where-s-waldo-f6739",
  storageBucket: "where-s-waldo-f6739.appspot.com",
  messagingSenderId: "786107419276",
  appId: "1:786107419276:web:8b7437545c48701ab989a9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);