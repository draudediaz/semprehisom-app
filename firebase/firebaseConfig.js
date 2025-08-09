// firebase/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBdeI5bFt8CkemUHbPZC97yHFWACQ5f_mQ",
  authDomain: "semprehisom-app.firebaseapp.com",
  projectId: "semprehisom-app",
  storageBucket: "semprehisom-app.firebasestorage.app",
  messagingSenderId: "103839081444",
  appId: "1:103839081444:web:840098b6e63b22e75c5df1",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
