import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import NoticiesScreen from "../screens/NoticiesScreen";
import DetallNoticiaScreen from "../screens/DetallNoticiaScreen";

const Stack = createNativeStackNavigator();

export default function NoticiesStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="LlistatNoticies"
        component={NoticiesScreen}
        options={{ title: "Notícies", headerShown: false }}
      />
      <Stack.Screen
        name="DetallNoticia"
        component={DetallNoticiaScreen}
        options={{
          title: "Detall de la notícia",
          headerBackTitle: "Enrere",
        }}
      />
    </Stack.Navigator>
  );
}
