import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpcza6WBRX6SE-Nmy37kyoGLOi4TsTmYw",
  authDomain: "devanse-collection.firebaseapp.com",
  projectId: "devanse-collection",
  storageBucket: "devanse-collection.appspot.com",
  messagingSenderId: "277556506412",
  appId: "1:277556506412:web:40fe0d963f298737760689"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

