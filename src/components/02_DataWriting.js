import {db} from '../firebase'
import { collection, doc, setDoc, getDoc, addDoc } from "firebase/firestore";


const DataWriting = async (x,y) => {

    await setDoc(doc(db, 'coordinates', 'coordinates'), {
        picture1: [
            {
                x1: 661,
                x2: 716,
                y1: 360,
                y2: 410
            },
            {
                x1: 716,
                x2: 718,
                y1: 360,
                y2: 391
            },
            {
                x1: 718,
                x2: 725,
                y1: 360,
                y2: 386
            },
            {
                x1: 659,
                x2: 825,
                y1: 349,
                y2: 360
            },
        ]

    })

    const docRef = doc(db, 'data types', 'SF');
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
        console.log('Document data:', docSnap.data());
    } else {
        // docSnap.data() will be undefined in this case
        console.log('No such document!');
    }
}


export default DataWriting