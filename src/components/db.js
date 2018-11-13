import {initializeApp} from 'firebase';

const app= initializeApp({
    apiKey: "AIzaSyCAofpHqUCSql5r-VUNpEPefz3_g6o82Io",
    authDomain: "hotels4us-a23c7.firebaseapp.com",
    databaseURL: "https://hotels4us-a23c7.firebaseio.com",
    projectId: "hotels4us-a23c7",
    storageBucket: "",
    messagingSenderId: "288009465711"
});

app.firestore().settings({
   timestampsInSnapshots:true
});



export const db= app.firestore();
//exporting the database
export const auth= app.auth();
//exporting auth 
export const storage= app.storage();
//exporting the storage sdk
