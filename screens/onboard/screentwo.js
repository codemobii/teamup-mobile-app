import React from "react";
import { Avatar, Colors, Text, View } from "react-native-ui-lib";
import { Feather } from "@expo/vector-icons";

// Import avatars
import Avatar1 from "../../assets/img/Avatar4.png";
import Avatar2 from "../../assets/img/Avatar5.png";
import Avatar3 from "../../assets/img/Avatar6.png";
import { TouchableOpacity } from "react-native";

export default function ScreentwoONBOARDING({ navigation }) {
  return (
    <View
      flex
      height-100
      backgroundColor={Colors.white}
      paddingH-35
      paddingT-100
    >
      <View
        width-100
        height={300}
        style={{
          position: "relative",
          flexDirection: "row",
          alignItems: "flex-end",
        }}
        center
      >
        <Avatar source={Avatar1} size={151} containerStyle={{ zIndex: 2 }} />
        <Avatar
          source={Avatar2}
          size={121}
          containerStyle={{ marginLeft: -15, zIndex: 1 }}
        />
        <Avatar
          source={Avatar3}
          size={83}
          containerStyle={{ marginLeft: -15 }}
        />
      </View>
      <View marginT-80 paddingH-30 center>
        <Text color={Colors.text} marginB-60 center text60L>
          Set up a particular target for you and your team to meet
        </Text>

        <TouchableOpacity onPress={() => navigation.navigate("ScreenThree")}>
          <Feather name="chevron-right" size={38} color={Colors.text} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
