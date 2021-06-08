import React from "react";
import { Avatar, Colors, Text, View } from "react-native-ui-lib";
import { Feather } from "@expo/vector-icons";

// Import avatars
import Avatar1 from "../../assets/img/Avatar1.png";
import Avatar2 from "../../assets/img/Avatar2.png";
import Avatar3 from "../../assets/img/Avatar3.png";
import { TouchableOpacity } from "react-native";

export default function ScreenoneONBOARDING({ navigation }) {
  return (
    <View
      flex
      height-100
      backgroundColor={Colors.white}
      paddingH-35
      paddingT-100
    >
      <View width-100 height={300} style={{ position: "relative" }}>
        <Avatar
          source={Avatar1}
          size={128}
          containerStyle={{
            position: "absolute",
            top: "50%",
            marginTop: -50,
            left: 0,
          }}
        />
        <Avatar
          source={Avatar2}
          size={123}
          containerStyle={{ position: "absolute", top: 0, right: 0 }}
        />
        <Avatar
          source={Avatar3}
          size={154}
          containerStyle={{ position: "absolute", bottom: 0, right: 0 }}
        />
      </View>
      <View marginT-80 paddingH-30 center>
        <Text color={Colors.text} marginB-60 center text60L>
          Accomplish your goals with your friends anywhere
        </Text>

        <TouchableOpacity onPress={() => navigation.navigate("ScreenTwo")}>
          <Feather name="chevron-right" size={38} color={Colors.text} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
