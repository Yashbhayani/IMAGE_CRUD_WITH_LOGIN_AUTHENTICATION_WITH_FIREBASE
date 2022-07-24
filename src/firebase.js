import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  /* apiKey: process.env.REACT_APP_FIREBASE_KEY,
     authDomain: "tutorial-e86f2.firebaseapp.com",
     projectId: "tutorial-e86f2",
     storageBucket: "tutorial-e86f2.appspot.com",
     messagingSenderId: "833491617507",
     appId: "1:833491617507:web:d7a4ec08a72e9e70b267d6"*/
  apiKey: "AIzaSyAAw15EHjFv9fS6en8PLa1arROZ5_wuQJ4",
  authDomain: "tutorial-e51b2.firebaseapp.com",
  projectId: "tutorial-e51b2",
  storageBucket: "tutorial-e51b2.appspot.com",
  messagingSenderId: "597954112446",
  appId: "1:597954112446:web:805c8cb81971306f3367ef"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);
