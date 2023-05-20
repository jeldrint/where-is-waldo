import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import { doc, setDoc } from "firebase/firestore";

//SAMPLE IMPORTS
import { collection, addDoc } from "firebase/firestore";

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
const db = getFirestore(app);

const sampleDataWriting = async () => {
    await addDoc(collection(db, 'data types'), {
        name: "Tohoku",
        country: "Japan"
    },{merge: true});

}




const dataWriting = async (x,y) => {
    await setDoc(doc(db,'coordinates','target'),{
        xCoordinate: x,
        yCoordinate: y
    }, {merge: true});    

}

export default sampleDataWriting