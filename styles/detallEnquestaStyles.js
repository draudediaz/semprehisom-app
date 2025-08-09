// /styles/detallEnquestaStyles.js
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5", // color clar per veure-ho tot bé
    padding: 20,
  },
  titol: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 24,
    textAlign: "center",
    color: "#000", // Assegura't que sigui negre o visible
  },
  boto: {
    backgroundColor: "#000", // Botó negre
    padding: 16,
    borderRadius: 10,
    marginBottom: 16,
  },
  textBoto: {
    color: "#fff", // <-- Això és clau per veure el text!
    fontSize: 16,
    textAlign: "center",
  },
});
