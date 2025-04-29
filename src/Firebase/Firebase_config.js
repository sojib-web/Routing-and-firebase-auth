import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCYijHVpPgCOMmHp2J3ZGm55eVN63kTJ1g",
  authDomain: "routing-and-firebase-auth.firebaseapp.com",
  projectId: "routing-and-firebase-auth",
  storageBucket: "routing-and-firebase-auth.firebasestorage.app",
  messagingSenderId: "921809371303",
  appId: "1:921809371303:web:660305cf0bd487c7929b82",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
