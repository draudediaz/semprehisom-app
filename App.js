import React, { useEffect } from "react";
import AppNavigator from "./navigation/AppNavigator";
import { iniciarSessioAnonima } from "./firebase/auth";

export default function App() {
  useEffect(() => {
    iniciarSessioAnonima();
  }, []);

  return <AppNavigator />;
}
