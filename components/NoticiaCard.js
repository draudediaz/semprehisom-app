import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import theme from "../styles/theme";
import React from "react";

export default function NoticiaCard({ titol, resum, imatge, onPress }) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      {imatge && (
        <Image
          source={{ uri: imatge }}
          style={styles.image}
          resizeMode="cover"
        />
      )}
      <View style={styles.content}>
        <Text style={styles.title}>{titol}</Text>
        <Text style={styles.summary}>{resum}</Text>
        <Text style={styles.link}>Llegeix més →</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: theme.colors.beixClar,
    borderRadius: 10,
    marginBottom: theme.spacing.md,
    overflow: "hidden",
    elevation: 2,
  },
  image: {
    width: "100%",
    height: 160,
  },
  content: {
    padding: theme.spacing.md,
  },
  title: {
    ...theme.typography.title,
    fontSize: 20,
    marginBottom: theme.spacing.xs,
  },
  summary: {
    ...theme.typography.body,
    marginBottom: theme.spacing.sm,
  },
  link: {
    ...theme.typography.small,
    color: theme.colors.negre,
    fontWeight: "bold",
  },
});
