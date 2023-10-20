import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { getFirestore} from 'firebase/firestore'


export const firebaseConfig = {
 
  };
  
  const app = initializeApp(firebaseConfig);
  const db = getFirestore();
  const auth = getAuth(app);

  
  export {auth,db};