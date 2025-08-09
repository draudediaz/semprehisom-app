// navigation/HomeStackNavigator.js
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../screens/HomeScreen";
import DetallNoticiaScreen from "../screens/DetallNoticiaScreen";
import DetallEnquestaScreen from "../screens/DetallEnquestaScreen"; // ✅ AFEGIT

const Stack = createNativeStackNavigator();

export default function HomeStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="DetallNoticia"
        component={DetallNoticiaScreen}
        options={{ title: "Notícia" }}
      />
      <Stack.Screen
        name="DetallEnquesta"
        component={DetallEnquestaScreen}
        options={{ title: "Enquesta" }}
      />
    </Stack.Navigator>
  );
}
