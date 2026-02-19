import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBaLGdROXPicrDW2hqbpa1W7TJLUOsnBcw",
  authDomain: "gym-manager-7a874.firebaseapp.com",
  projectId: "gym-manager-7a874",
  storageBucket: "gym-manager-7a874.firebasestorage.app",
  messagingSenderId: "172441324263",
  appId: "1:172441324263:web:58f565c9ed4f2f96387042",
  measurementId: "G-R7T87229WX"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleAuthProvider = new GoogleAuthProvider();