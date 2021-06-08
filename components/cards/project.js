import React from "react";
import { Avatar, Button, Card, Colors, Text, View } from "react-native-ui-lib";
import { Ionicons } from "@expo/vector-icons";

export default function ProjectCARD(props) {
  return (
    <Card
      style={{ marginBottom: 15, borderRadius: 20 }}
      onPress={() => props.navigation.navigate("Card")}
      enableShadow={false}
      backgroundColor={Colors.white}
      activeScale={0.3}
    >
      <View padding-20>
        <View
          row
          style={{ justifyContent: "space-between", alignItems: "center" }}
        >
          <View
            padding-5
            backgroundColor={Colors.grey60}
            style={{ borderRadius: 100 }}
          >
            <Text text90 marginL-8 color={Colors.grey30}>
              3 Members
            </Text>
          </View>

          <View
            row
            right
            style={{ alignItems: "center", borderRadius: 10 }}
            padding-8
            backgroundColor={Colors.green30}
          >
            <Ionicons name="albums-outline" size={18} color={Colors.white} />
            <Text text90 marginL-5 color={Colors.white}>
              21
            </Text>
          </View>
        </View>

        <Text
          marginV-20
          text40
          style={{ fontWeight: "normal" }}
          color={Colors.grey10}
        >
          Define our screens
        </Text>

        <View row left style={{ alignItems: "center" }}>
          <Avatar
            source={{
              uri: "https://images.unsplash.com/photo-1621542865781-6eb360f1a7f8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=384&q=80",
            }}
            size={18}
          />
          <Text text90 marginL-5 color={Colors.grey30}>
            3 Members
          </Text>
        </View>
      </View>
    </Card>
  );
}
