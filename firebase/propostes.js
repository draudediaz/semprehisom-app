import { getFirestore, collection, addDoc } from "firebase/firestore";

export const enviarProposta = async (proposta) => {
  const db = getFirestore();
  await addDoc(collection(db, "propostes"), proposta);
};
