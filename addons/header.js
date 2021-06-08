import React from "react";
import { View, Text, Animated } from "react-native";

export default function HeaderADDON() {
  const { ValueXY } = Animated;
  const scrollY = new ValueXY();

  const opacity = scrollY.y.interpolate({
    inputRange: [0, 60, 90],
    outputRange: [0, 0, 1],
    extrapolate: "clamp",
  });

  return (
    <View>
      <View>
        <Animated.View style={{ opacity }}>
          <Text>Baby Yoda</Text>
        </Animated.View>
      </View>
    </View>
  );
}
