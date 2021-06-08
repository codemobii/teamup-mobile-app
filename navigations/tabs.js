import React from "react";

import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Colors } from "react-native-ui-lib";

import MainTabsNAVIGATOR from "./main";

const Tab = createBottomTabNavigator();

export default function TabsNAVIGATOR() {
  return (
    <>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color }) => {
            let iconName;

            if (route.name === "Cards") {
              iconName = "albums";
            } else if (route.name === "Notifications") {
              iconName = "ios-notifications";
            } else if (route.name === "Profile") {
              iconName = "person";
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={21} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: Colors.text,
          inactiveTintColor: "gray",
          labelStyle: {
            fontSize: 16,
            fontWeight: "800",
            fontFamily: "Quicksand_700Bold",
          },
        }}
      >
        <Tab.Screen name="Cards" component={MainTabsNAVIGATOR} />
        <Tab.Screen name="Notifications" component={MainTabsNAVIGATOR} />
        <Tab.Screen name="Profile" component={MainTabsNAVIGATOR} />
      </Tab.Navigator>
    </>
  );
}
