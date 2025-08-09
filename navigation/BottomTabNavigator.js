import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import HomeScreen from "../screens/HomeScreen";
import ParticipaScreen from "../screens/ParticipaScreen";
import EnquestesScreen from "../screens/EnquestesScreen";
import HomeStackNavigator from "./HomeStackNavigator";
import NoticiesStackNavigator from "../navigation/NoticiesStackNavigator";
import EnquestesStackNavigator from "./EnquestesStackNavigator";

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Inici"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: "#FDCB00",
        tabBarInactiveTintColor: "#333",
        tabBarStyle: { backgroundColor: "#fff" },
        tabBarIcon: ({ color, size }) => {
          let iconName;

          switch (route.name) {
            case "Inici":
              iconName = "home-outline";
              break;
            case "Notícies":
              iconName = "newspaper-outline";
              break;
            case "Participa":
              iconName = "chatbox-ellipses-outline";
              break;
            case "Enquestes":
              iconName = "clipboard-outline";
              break;
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Inici" component={HomeStackNavigator} />
      <Tab.Screen name="Notícies" component={NoticiesStackNavigator} />
      <Tab.Screen name="Participa" component={ParticipaScreen} />
      <Tab.Screen name="Enquestes" component={EnquestesStackNavigator} />
    </Tab.Navigator>
  );
}
