import { collection, getDocs, getFirestore } from "firebase/firestore";

export async function getEnquestes() {
  const db = getFirestore();
  const enquestesRef = collection(db, "enquestes");

  const snapshot = await getDocs(enquestesRef);
  const enquestes = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return enquestes;
}
