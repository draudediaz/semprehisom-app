import React, { useEffect, useState, useRef } from "react";
import { View, ScrollView, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import NoticiaCard from "../components/NoticiaCard";
import { getNoticies } from "../firebase/firestore";
import theme from "../styles/theme";
import { useFocusEffect } from "@react-navigation/native";

export default function NoticiesScreen({ navigation }) {
  const [noticies, setNoticies] = useState([]);
  const scrollRef = useRef(null);

  useEffect(() => {
    getNoticies().then((data) => {
      const ordenades = data.sort(
        (a, b) => b.data?.toDate() - a.data?.toDate()
      );
      setNoticies(ordenades);
    });
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollTo({ y: 0, animated: false });
      }
    }, [])
  );

  return (
    <SafeAreaView style={{ flex: 1 }} edges={["top"]}>
      <ScrollView ref={scrollRef} contentContainerStyle={styles.container}>
        <Text style={styles.titol}>Notícies</Text>
        {noticies.map((noticia) => (
          <NoticiaCard
            key={noticia.id}
            titol={noticia.titol}
            resum={noticia.resum}
            imatge={noticia.imatge}
            onPress={() =>
              navigation.navigate("DetallNoticia", { noticia: noticia })
            }
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: theme.spacing.md,
    backgroundColor: theme.colors.beix,
  },
  titol: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: theme.spacing.md,
    color: theme.colors.negre,
  },
});
