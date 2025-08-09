import { getAuth, signInAnonymously, onAuthStateChanged } from "firebase/auth";
import { app } from "./firebaseConfig";

const auth = getAuth(app);

// Funció per iniciar sessió anònima
export const iniciarSessioAnonima = async () => {
  try {
    const result = await signInAnonymously(auth);
    console.log("Sessió iniciada anònimament:", result.user.uid);
    return result.user;
  } catch (error) {
    console.error("Error iniciant sessió anònima:", error);
    throw error;
  }
};

// Escoltador per saber si l'usuari està logejat
export const escoltarCanvisAuth = (callback) => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      callback(user);
    } else {
      callback(null);
    }
  });
};
