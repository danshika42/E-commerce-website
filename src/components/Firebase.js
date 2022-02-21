import {initializeApp} from 'firebase/app'
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAbk6HbAf3BUuxqlhwVi5T4dC5sPhioz0Y",
  authDomain: "clone-app-788f4.firebaseapp.com",
  projectId: "clone-app-788f4",
  storageBucket: "clone-app-788f4.appspot.com",
  messagingSenderId: "1007772537030",
  appId: "1:1007772537030:web:893ae9af1264f54cafc7c7"
};

const app=initializeApp(firebaseConfig);
export const auth=getAuth(app);