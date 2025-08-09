import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "../styles/detallNoticiaStyles";

export default function DetallNoticiaScreen({ route }) {
  const { noticia } = route.params;

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <ScrollView contentContainerStyle={styles.content}>
        {noticia.imatge && (
          <Image source={{ uri: noticia.imatge }} style={styles.imatge} />
        )}
        <Text style={styles.data}>
          {new Date(noticia.data.seconds * 1000).toLocaleDateString("ca-ES")}
        </Text>
        <Text style={styles.titol}>{noticia.titol}</Text>
        <Text style={styles.text}>{noticia.text}</Text>
      </ScrollView>
    </SafeAreaView>
  );
}
