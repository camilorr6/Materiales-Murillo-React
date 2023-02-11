import {getFirestore} from "firebase/firestore"

import { initializeApp } from "firebase/app"

const firebaseConfig = {
  apiKey: "AIzaSyCkjC07Tv1yU053jrzb88x3_c4Z-NTqAX8",
  authDomain: "materiales-murillo.firebaseapp.com",
  projectId: "materiales-murillo",
  storageBucket: "materiales-murillo.appspot.com",
  messagingSenderId: "1007034724640",
  appId: "1:1007034724640:web:a2b21923c638c85b012745"
};

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)