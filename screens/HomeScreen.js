import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  ImageBackground,
} from "react-native";
import CustomButton from "../components/CustomButton";
import NoticiaCard from "../components/NoticiaCard";
import EnquestaCard from "../components/EnquestaCard";
import theme from "../styles/theme";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "../styles/homeStyles";
import { getNoticies } from "../firebase/firestore";

export default function HomeScreen({ navigation }) {
  const [noticies, setNoticies] = useState([]);

  useEffect(() => {
    getNoticies().then(setNoticies);
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }} edges={["top"]}>
      <ImageBackground
        source={require("../assets/skyline.jpeg")}
        style={styles.background}
      >
        <ScrollView contentContainerStyle={styles.container}>
          <View style={styles.titleWrapper}>
            <Text style={styles.titleSmall}>#SEMPRE</Text>
            <Text style={styles.titleBig}>HISOM</Text>
          </View>

          <Text style={styles.subtitle}>
            Dona veu al teu poble. Participa. Opina. Informa’t.
          </Text>

          {noticies.length > 0 && (
            <>
              <Text style={styles.sectionTitle}>Actualitat</Text>

              <NoticiaCard
                titol={noticies[0].titol}
                resum={noticies[0].resum}
                imatge={noticies[0].imatge}
                onPress={() =>
                  navigation.navigate("DetallNoticia", { noticia: noticies[0] })
                }
              />

              <CustomButton
                title="Veure més notícies"
                onPress={() => navigation.navigate("Notícies")}
              />
              <View style={{ marginTop: theme.spacing.lg }} />
            </>
          )}

          <EnquestaCard
            pregunta="On prioritzaries invertir el pressupost del 2026?"
            onPress={() => navigation.navigate("Enquestes")}
          />

          <View style={styles.buttonGroup}>
            <CustomButton
              title="Participa ara"
              onPress={() => navigation.navigate("Participa")}
            />
            <CustomButton
              title="Consulta les notícies"
              onPress={() => navigation.navigate("Notícies")}
            />
            <CustomButton
              title="Envia una incidència"
              onPress={() => navigation.navigate("Participa")}
            />
          </View>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
}
