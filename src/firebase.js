import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from 'firebase/auth';
import config from './config'

const app = initializeApp(config);


export const auth=getAuth(app);
export const db=getFirestore(app);

// export {auth,db}