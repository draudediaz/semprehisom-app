// navigation/EnquestesStackNavigator.js
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import EnquestesScreen from "../screens/EnquestesScreen";
import DetallEnquestaScreen from "../screens/DetallEnquestaScreen";

const Stack = createNativeStackNavigator();

export default function EnquestesStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Enquestes"
        component={EnquestesScreen}
        options={{ headerShown: false }} // 👈 amaguem el títol del top
      />
      <Stack.Screen
        name="DetallEnquesta"
        component={DetallEnquestaScreen}
        options={{ title: "Enquesta" }} // 👈 aquí sí vols el header amb “enrere”
      />
    </Stack.Navigator>
  );
}
