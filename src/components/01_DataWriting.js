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
        ],
        picture2: [
            {
                x1: 312,
                x2: 362,
                y1: 528,
                y2: 580
            },
        ],
        picture3: [
            {
                x1: 180,
                x2: 230,
                y1: 520,
                y2: 580
            },
        ],
        picture4: [
            {
                x1: 197,
                x2: 240,
                y1: 445,
                y2: 500
            },
        ],
        picture5: [
            {
                x1: 579,
                x2: 593,
                y1: 483,
                y2: 497
            },
            {
                x1: 593,
                x2: 614,
                y1: 491,
                y2: 501
            },
            {
                x1: 625,
                x2: 647,
                y1: 509,
                y2: 520
            },
        ],

    })
}


export default DataWriting