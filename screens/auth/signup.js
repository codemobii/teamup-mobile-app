import React from "react";
import { Button, Colors, TextField, View } from "react-native-ui-lib";
import AuthLAYOUT from "../../layouts/auth";

export default function SignupSCREEN() {
  return (
    <AuthLAYOUT>
      <TextField placeholder="Fullname" />
      <TextField placeholder="Email address" />
      <TextField placeholder="Password" hideUndeline={true} secureTextEntry />
      <View marginT-50 center>
        <Button
          labelStyle={{ fontWeight: "800" }}
          backgroundColor={Colors.text}
          color={Colors.white}
          label="Get started"
        />
        <Button
          link
          color={Colors.text}
          labelStyle={{ fontWeight: "800" }}
          label="Sign In"
          marginT-20
        />
      </View>
    </AuthLAYOUT>
  );
}
