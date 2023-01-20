import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyD9nbMKcqG9pNCC1quZHPCM4lHnEYWvKt4",
  authDomain: "fireauth-ce2cd.firebaseapp.com",
  projectId: "fireauth-ce2cd",
  storageBucket: "fireauth-ce2cd.appspot.com",
  messagingSenderId: "308780243074",
  appId: "1:308780243074:web:5d1f317ee6615d033c3c9b",
  measurementId: "G-3BNNH5BDMQ"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export default app