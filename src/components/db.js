import { firestore,auth,storage,initializeApp } from 'firebase'; 
 
import 'firebase/firestore';
import 'firebase/auth';

var app = initializeApp({
    apiKey: "AIzaSyDUTvuWCd3Yy4a3dNoK1oHU6WFItmoPDTs",
    authDomain: "baker-97044.firebaseapp.com",
    databaseURL: "https://baker-97044.firebaseio.com",
    projectId: "baker-97044",
    storageBucket: "baker-97044.appspot.com",
    messagingSenderId: "273680961136",
    appId: "1:273680961136:web:9b5a4fab83ee42d587eeb5"
});



export const db= app.firestore();
//exporting the database
export const authy= app.auth();
//exporting auth 
export const storagey= app.storage();
//exporting the storage sdk
