import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { getEnquestes } from "../firebase/enquestes";
import theme from "../styles/theme";

export default function EnquestesScreen() {
  const [enquestes, setEnquestes] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    getEnquestes().then((data) => setEnquestes(data));
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }} edges={["top"]}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <Text style={styles.titol}>Enquestes</Text>
          <Text style={styles.descripcio}>
            La teva opinió és important per nosaltres.{"\n"}
            Participa a les enquestes de forma totalment anònima.
          </Text>
        </View>

        {enquestes.length === 0 ? (
          <Text style={styles.text}>
            No hi ha cap enquesta activa ara mateix.
          </Text>
        ) : (
          enquestes.map((enquesta) => (
            <TouchableOpacity
              key={enquesta.id}
              style={styles.card}
              onPress={() =>
                navigation.navigate("DetallEnquesta", { enquesta: enquesta })
              }
            >
              <Text style={styles.pregunta}>{enquesta.pregunta}</Text>
              <Text style={styles.veure}>Participa ▶</Text>
            </TouchableOpacity>
          ))
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: theme.spacing.md,
    backgroundColor: theme.colors.beix,
  },
  header: {
    marginBottom: theme.spacing.lg,
    alignItems: "center",
  },
  titol: {
    fontSize: 26,
    fontWeight: "bold",
    color: theme.colors.negre,
    textAlign: "center",
  },
  descripcio: {
    fontSize: 18,
    color: theme.colors.negre,
    textAlign: "center",
    marginTop: theme.spacing.xs,
  },
  text: {
    fontSize: 16,
    textAlign: "center",
    color: theme.colors.negre,
  },
  card: {
    backgroundColor: theme.colors.beixClar,
    padding: theme.spacing.md,
    borderRadius: 10,
    marginBottom: theme.spacing.md,
  },
  pregunta: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: theme.spacing.sm,
    color: theme.colors.negre,
  },
  veure: {
    fontSize: 14,
    color: theme.colors.negre,
    textAlign: "right",
    fontWeight: "600",
  },
});
