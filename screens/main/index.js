import React from "react";
import { View, Text } from "react-native";
import ProjectCARD from "../../components/cards/project";
import MainLAYOUT from "../../layouts/main";

export default function Cards() {
  return (
    <MainLAYOUT>
      <View>
        {Array.from(Array(30).keys()).map((i) => (
          <ProjectCARD />
        ))}
      </View>
    </MainLAYOUT>
  );
}
