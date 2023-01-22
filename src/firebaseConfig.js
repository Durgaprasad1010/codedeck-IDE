import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyChruxAOI-HobTT0K6lpzW3lIDiNd4pK-c",
    authDomain: "codedeck-ide.firebaseapp.com",
    projectId: "codedeck-ide",
    storageBucket: "codedeck-ide.appspot.com",
    messagingSenderId: "666127371222",
    appId: "1:666127371222:web:be829ad5bf3ba578f83277",
    measurementId: "G-YZFWGNC09F"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebaseApp.auth();

export { db, auth };