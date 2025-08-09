import React from "react";
import { View, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FormulariParticipa from "../components/FormulariParticipa";

export default function ParticipaScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ padding: 16 }}>
        <Text
          style={{
            fontSize: 22,
            marginTop: 28,
            fontWeight: "bold",
            marginBottom: 12,
            textAlign: "center",
          }}
        >
          Participa!
        </Text>
        <Text
          style={{
            marginBottom: 16,
            fontSize: 16,
            textAlign: "center",
          }}
        >
          Fes-nos arribar qualsevol proposta, queixa o suggeriment. Pots
          identificar-te si vols que et donem resposta, o enviar-ho anònimament.
        </Text>
        <FormulariParticipa />
      </ScrollView>
    </SafeAreaView>
  );
}
