import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDSLhPZ7IFCs2_klBL2vW9G8mBeQUjLbAQ",
  authDomain: "ecommers-nekobazar.firebaseapp.com",
  projectId: "ecommers-nekobazar",
  storageBucket: "ecommers-nekobazar.firebasestorage.app",
  messagingSenderId: "1057919360856",
  appId: "1:1057919360856:web:4ae3ecce0874467d77cf2d",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
