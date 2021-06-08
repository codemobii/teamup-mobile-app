import { StatusBar } from "expo-status-bar";
import React from "react";
import { Colors } from "react-native-ui-lib";
import RootNAVIGATOR from "./navigations";

export default function App() {
  // Load colors

  Colors.loadColors({
    error: "#ff2442",
    success: "#00CD8B",
    text: "#105766",
    brandOne: "#FECD66",
  });

  return (
    <>
      <StatusBar translucent={true} style="auto" />
      <RootNAVIGATOR />
    </>
  );
}
