// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB3W_82XGy8I8SADbYTjM5Hx2zfrUjDBdk",
    authDomain: "coderhouse-proyect-61a84.firebaseapp.com",
    projectId: "coderhouse-proyect-61a84",
    storageBucket: "coderhouse-proyect-61a84.appspot.com",
    messagingSenderId: "195264206084",
    appId: "1:195264206084:web:71977521e6a3fcccaeec51"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);