import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAbk6HbAf3BUuxqlhwVi5T4dC5sPhioz0Y",
    authDomain: "clone-app-788f4.firebaseapp.com",
    projectId: "clone-app-788f4",
    storageBucket: "clone-app-788f4.appspot.com",
    messagingSenderId: "1007772537030",
    appId: "1:1007772537030:web:893ae9af1264f54cafc7c7"
})


const db=firebaseApp.firestore();
const auth = firebase.auth();

export {db,auth};