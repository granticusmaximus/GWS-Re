import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";



const config = {
  apiKey: process.NEXT_PUBLIC_API_KEY,
  authDomain: process.NEXT_PUBLIC_AUTH_DOMAIN,
  databaseURL: process.NEXT_DATABASE_URL,
  projectId: process.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  appId: process.NEXT_PUBLIC_APP_ID,
  measurementId: process.NEXT_MEASUREMENT_ID
};

const app = initializeApp(config);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();