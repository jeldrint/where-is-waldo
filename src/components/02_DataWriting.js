import {db} from '../firebase.js'
import { doc, setDoc, getDoc } from "firebase/firestore";


const DataWriting = async () => {

    await setDoc(doc(db, 'coordinates', 'coordinates'), {
        picture1: [
            {
                x1: 629,
                x2: 805,
                y1: 217,
                y2: 285
            },
            {
                x1: 637,
                x2: 812,
                y1: 230,
                y2: 262

            },
            {
                x1: 614,
                x2: 679,
                y1: 255,
                y2: 325

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