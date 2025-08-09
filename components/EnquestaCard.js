import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import theme from "../styles/theme";

export default function EnquestaCard({ pregunta, onPress }) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Text style={styles.question}>{pregunta}</Text>
      <Text style={styles.link}>Respon l’enquesta →</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: theme.colors.taronjaSuau,
    padding: theme.spacing.md,
    borderRadius: 10,
    marginBottom: theme.spacing.md,
    shadowColor: theme.colors.negre,
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 2,
  },
  question: {
    ...theme.typography.body,
    fontWeight: "bold",
    marginBottom: theme.spacing.sm,
  },
  link: {
    ...theme.typography.small,
    color: theme.colors.negre,
    fontWeight: "bold",
  },
});
