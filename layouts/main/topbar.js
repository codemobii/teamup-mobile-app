import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { ActionBar, Avatar, Colors, Text, View } from "react-native-ui-lib";
import { Ionicons } from "@expo/vector-icons";

export default function TopbarLAYOUT() {
  return (
    <ActionBar
      style={{ height: 50 }}
      keepRelative
      actions={[
        {
          label: (
            <View flex style={{ flexDirection: "row", alignItems: "center" }}>
              <Avatar
                source={{
                  uri: "https://images.unsplash.com/flagged/photo-1574874897534-036671407eda?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fG1hbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                }}
                size={32}
              />
              <Text
                marginL-10
                style={{ fontSize: 15 }}
                text100
                color={Colors.text}
              >
                Chimaobi
              </Text>
            </View>
          ),
        },
        {
          label: (
            <View row centerH>
              {/* <TouchableOpacity>
                <Ionicons name="add" size={24} color={Colors.text} />
              </TouchableOpacity> */}

              <TouchableOpacity>
                <Ionicons name="notifications" size={24} color={Colors.text} />
              </TouchableOpacity>
            </View>
          ),
        },
      ]}
    />
  );
}
