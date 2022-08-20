import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_authDomain",
    projectId: "YOUR_projectId",
    storageBucket: "YOUR_storageBucket",
    messagingSenderId: "YOUR_messagingSenderId",
    appId: "YOUR_appId"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);
