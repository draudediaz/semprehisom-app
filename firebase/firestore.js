import {
  getFirestore,
  collection,
  getDocs,
  query,
  orderBy,
} from "firebase/firestore";
import { app } from "./firebaseConfig";

const db = getFirestore(app);

export const getNoticies = async () => {
  const noticiesRef = collection(db, "noticies");
  const q = query(noticiesRef, orderBy("data", "desc")); // 👈 molt important
  const querySnapshot = await getDocs(q);

  return querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
};
