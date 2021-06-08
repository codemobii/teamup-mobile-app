import React from "react";
import { Alert } from "react-native";
import { ActionBar, Colors } from "react-native-ui-lib";

export default function ActionbarLAYOUT() {
  return (
    <ActionBar
      backgroundColor={Colors.green40}
      actions={[
        {
          label: "Delete",
          color: "white",

          onPress: () => Alert.alert("delete"),
        },
        {
          label: "SIGNIN",
          onPress: () => Alert.alert("replace photo"),
        },
      ]}
      keepRelative={true}
    />
  );
}
