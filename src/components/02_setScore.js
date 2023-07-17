import {db} from '../firebase'
import { addDoc, setDoc, collection, doc } from "firebase/firestore";

const setScore = async (timer) =>{
    let name = prompt('Congratulations! You\'ve completed the game! Please enter your name.');
    await addDoc(collection(db, 'high score'),{
        name: name,
        timer: timer,
        hrs: Math.floor(timer / 3600),
        mins: Math.floor(timer / 60),
        secs: timer % 60        
    });
    await setDoc(doc(db, 'coordinates', 'time'),{time: 0})
}

export default setScore