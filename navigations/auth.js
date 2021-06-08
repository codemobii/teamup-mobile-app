import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";

// Screen
import SigninSCREEN from "../screens/auth/signin";
import ScreenoneONBOARDING from "../screens/onboard/screenone";
import ScreentwoONBOARDING from "../screens/onboard/screentwo";
import ScreenthreeONBOARDING from "../screens/onboard/screenthree";
import SignupSCREEN from "../screens/auth/signup";

const Stack = createStackNavigator();

function AuthNAVIGATOR() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="ScreenOne" component={ScreenoneONBOARDING} />
      <Stack.Screen name="ScreenTwo" component={ScreentwoONBOARDING} />
      <Stack.Screen name="ScreenThree" component={ScreenthreeONBOARDING} />
      <Stack.Screen name="SIGNIN" component={SigninSCREEN} />
      <Stack.Screen name="SIGNUP" component={SignupSCREEN} />
    </Stack.Navigator>
  );
}

export default AuthNAVIGATOR;
