import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  Alert,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import theme from "../styles/theme";
import { enviarProposta } from "../firebase/propostes";
import { getAuth } from "firebase/auth";
import CustomButton from "./CustomButton";

export default function FormulariParticipa() {
  const [missatge, setMissatge] = useState("");
  const [nom, setNom] = useState("");
  const [correu, setCorreu] = useState("");
  const [telefon, setTelefon] = useState("");
  const [loading, setLoading] = useState(false);

  const handleEnviar = async () => {
    if (!missatge.trim()) {
      Alert.alert("Error", "El missatge és obligatori.");
      return;
    }

    setLoading(true);

    try {
      const auth = getAuth();
      const uid = auth.currentUser?.uid || "anònim";
      const data = {
        missatge,
        nom: nom.trim() || null,
        correu: correu.trim() || null,
        telefon: telefon.trim() || null,
        uid,
        data: new Date(),
      };

      await enviarProposta(data);

      setMissatge("");
      setNom("");
      setCorreu("");
      setTelefon("");
      Alert.alert("Gràcies!", "El teu missatge s'ha enviat correctament.");
    } catch (error) {
      console.error("Error enviant proposta:", error);
      Alert.alert("Error", "No s'ha pogut enviar el missatge.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Missatge *</Text>
      <TextInput
        style={[styles.input, styles.multiline]}
        value={missatge}
        onChangeText={setMissatge}
        placeholder="Escriu aquí la teva proposta o queixa..."
        multiline
        numberOfLines={4}
      />

      <Text style={styles.label}>Nom</Text>
      <TextInput
        style={styles.input}
        value={nom}
        onChangeText={setNom}
        placeholder="Nom (opcional)"
      />

      <Text style={styles.label}>Correu electrònic</Text>
      <TextInput
        style={styles.input}
        value={correu}
        onChangeText={setCorreu}
        placeholder="Correu electrònic (opcional)"
        keyboardType="email-address"
      />

      <Text style={styles.label}>Telèfon</Text>
      <TextInput
        style={styles.input}
        value={telefon}
        onChangeText={setTelefon}
        placeholder="Telèfon (opcional)"
        keyboardType="phone-pad"
      />

      {loading ? (
        <ActivityIndicator size="large" color={theme.colors.groc} />
      ) : (
        <CustomButton title="Enviar" onPress={handleEnviar} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: theme.spacing.md,
    backgroundColor: theme.colors.beix,
    borderRadius: 10,
  },
  label: {
    fontWeight: "bold",
    fontSize: 18,
    marginTop: theme.spacing.sm,
    marginBottom: 4,
    color: theme.colors.negre,
  },
  input: {
    backgroundColor: "#fff",
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 6,
    padding: theme.spacing.sm,
    marginBottom: theme.spacing.sm,
  },
  multiline: {
    height: 150,
    textAlignVertical: "top",
  },
});
