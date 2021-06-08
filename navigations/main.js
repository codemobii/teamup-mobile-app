import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";

// Screen
import CardsMAIN from "../screens/main";

const Stack = createStackNavigator();

function MainTabsNAVIGATOR() {
  return (
    <>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="Home" component={CardsMAIN} />
      </Stack.Navigator>
    </>
  );
}

export default MainTabsNAVIGATOR;
