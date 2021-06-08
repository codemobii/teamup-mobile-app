import React from "react";
import { Avatar, Button, Colors, Text, View } from "react-native-ui-lib";

// Import avatars
import AvatarIMG from "../../assets/img/Avatar5.png";

export default function ScreenthreeONBOARDING({ navigation }) {
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
        <Avatar source={AvatarIMG} size={195} />
      </View>
      <View marginT-80 paddingH-30>
        <Text color={Colors.text} marginB-60 center text60L>
          Get started and start teaming up ASAP
        </Text>

        <View>
          <Button
            labelStyle={{ fontWeight: "800" }}
            backgroundColor={Colors.text}
            color={Colors.white}
            label="Sign In"
            onPress={() => navigation.navigate("SIGNIN")}
          />

          <Button
            marginT-15
            labelStyle={{ fontWeight: "800" }}
            backgroundColor={Colors.grey60}
            color={Colors.text}
            label="Sign Up"
            onPress={() => navigation.navigate("SIGNUP")}
          />
        </View>
      </View>
    </View>
  );
}
