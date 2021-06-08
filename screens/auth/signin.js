import React from "react";
import { Button, Colors, TextField, View } from "react-native-ui-lib";
import { AuthContext } from "../../contexts/auth";
import AuthLAYOUT from "../../layouts/auth";

export default function SigninSCREEN({ navigation }) {
  const { signIn } = React.useContext(AuthContext);
  return (
    <AuthLAYOUT>
      <TextField placeholder="Email address" />
      <TextField placeholder="Password" />
      <View marginT-50 center>
        <Button
          labelStyle={{ fontWeight: "800" }}
          backgroundColor={Colors.text}
          color={Colors.white}
          label="Sign In"
          onPress={() => signIn({ username: "jjj", password: "ddd" })}
        />
        <Button
          link
          color={Colors.text}
          labelStyle={{ fontWeight: "800" }}
          label="Sign Up"
          marginT-20
          onPress={() => navigation.navigate("SIGNUP")}
        />
      </View>
    </AuthLAYOUT>
  );
}
