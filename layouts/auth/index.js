import React, { useContext } from "react";
import { Button, Colors, TextField, Toast, View } from "react-native-ui-lib";

export default function AuthLAYOUT({
  children,
  message = "Loading",
  show = false,
  isError = false,
}) {
  return (
    <>
      <View flex paddingH-25 paddingT-100>
        {children}
      </View>
    </>
  );
}
