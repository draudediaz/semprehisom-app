import React, { useState } from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { getAuth } from "firebase/auth";
import { doc, updateDoc, arrayUnion, getFirestore } from "firebase/firestore";
import styles from "../styles/detallEnquestaStyles";
import { getDoc } from "firebase/firestore";

export default function DetallEnquestaScreen({ route }) {
  const { enquesta } = route.params;
  const [votant, setVotant] = useState(false);

  const votar = async (opcioSeleccionada) => {
    setVotant(true);
    try {
      const auth = getAuth();
      const uid = auth.currentUser?.uid;

      const db = getFirestore();
      const enquestaRef = doc(db, "enquestes", enquesta.id);
      const enquestaSnap = await getDoc(enquestaRef);

      const dadesEnquesta = enquestaSnap.data();
      const vots = dadesEnquesta.vots || [];

      // Comprova si l'usuari ja ha votat
      const jaHaVotat = vots.some((vot) => vot.uid === uid);

      if (jaHaVotat) {
        Alert.alert("Ja has votat", "Només pots votar una vegada.");
        return;
      }

      // Afegeix el vot
      await updateDoc(enquestaRef, {
        vots: arrayUnion({ opcio: opcioSeleccionada, uid }),
      });

      Alert.alert("Gràcies!", "El teu vot s'ha registrat correctament.");
    } catch (error) {
      console.error("Error votant:", error);
      Alert.alert("Error", "No s'ha pogut enregistrar el teu vot.");
    } finally {
      setVotant(false);
    }
  };

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <Text style={styles.titol}>{enquesta.pregunta}</Text>
      {enquesta.opcions.map((opcio, index) => (
        <TouchableOpacity
          key={index}
          style={styles.boto}
          onPress={() => votar(opcio)}
          disabled={votant}
        >
          <Text style={styles.textBoto}>{opcio}</Text>
        </TouchableOpacity>
      ))}
    </SafeAreaView>
  );
}
