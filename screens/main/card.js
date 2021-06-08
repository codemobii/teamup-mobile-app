import React from "react";
import { ScrollView } from "react-native";
import {
  Avatar,
  Checkbox,
  Colors,
  FloatingButton,
  ScrollBar,
  Text,
  View,
} from "react-native-ui-lib";
import { Ionicons } from "@expo/vector-icons";
import MainLAYOUT from "../../layouts/main";

export default function CardMAIN() {
  return (
    <MainLAYOUT>
      <ScrollView style={{ flex: 1, padding: 20 }}>
        <Text marginB-10 text70 textAlign="center">
          Members
        </Text>
        <ScrollBar
          backgroundColor={Colors.grey70}
          horizontal
          style={{ borderRadius: 15 }}
          contentContainerStyle={{ alignItems: "center", padding: 20 }}
        >
          <View center marginR-10>
            <Ionicons
              name="ios-add-circle-outline"
              size={44}
              color={Colors.text}
            />
          </View>
          {[1, 2, 3, 4, 5, 6, 6, 6, 6, 6].map((e, i) => (
            <View key={i} center marginR-10>
              <Avatar
                source={{
                  uri: "https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fG1hbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                }}
                size={44}
              />
              <Text text70 textAlign="center">
                Chimaobi
              </Text>
            </View>
          ))}
        </ScrollBar>

        <Text marginT-20 marginB-20 text70 textAlign="center">
          Todos
        </Text>

        {[1, 2, 3, 4, 5, 6, 3, 3, 3].map((e, i) => (
          <Checkbox
            value={1}
            label={
              "Some todo text is here ni oo Some todo text is here ni oo Some todo text is here ni oo"
            }
            color={Colors.brandOne}
            containerStyle={{ marginBottom: 20 }}
          />
        ))}
      </ScrollView>

      {/*  */}
      <FloatingButton
        visible={true}
        button={{
          label: "Add new card",
          backgroundColor: Colors.text,
        }}
      />
    </MainLAYOUT>
  );
}
