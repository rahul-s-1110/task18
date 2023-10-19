import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { getFirestore} from 'firebase/firestore'


export const firebaseConfig = {
    apiKey: "AIzaSyBQvB2ZZKzLodZg_2hw1v8wO4QaEQGkMjA",
    authDomain: "thinktankerassignment.firebaseapp.com",
    projectId: "thinktankerassignment",
    storageBucket: "thinktankerassignment.appspot.com",
    messagingSenderId: "363931064648",
    appId: "1:363931064648:web:0ef93e60e6a5d44cc3bb7d",
    measurementId: "G-RF5X1918LM"
  };
  
  const app = initializeApp(firebaseConfig);
  const db = getFirestore();
  const auth = getAuth(app);

  
  export {auth,db};