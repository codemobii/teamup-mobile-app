import React from "react";
import {
  Button,
  ChipsInput,
  Colors,
  Constants,
  Dialog,
  PanningProvider,
  Text,
  TextField,
  View,
} from "react-native-ui-lib";

export default function AddcardADDON({ show = false, onDismiss }) {
  return (
    <Dialog
      migrate
      useSafeArea={true}
      top=""
      containerStyle={{
        backgroundColor: "#fff",

        marginBottom: Constants.isIphoneX ? 0 : 20,
        borderRadius: 10,
      }}
      panDirection={PanningProvider.Directions.DOWN}
      visible={show}
      onDismiss={onDismiss}
      renderPannableHeader={() => (
        <View>
          <View margin-20>
            <Text text60>Create a new card</Text>
          </View>
          <View height={2} bg-dark70 />
        </View>
      )}
      // ignoreBackgroundPress={ignoreBackgroundPress}
    >
      <View padding-20>
        <TextField placeholder="Title" />
        <ChipsInput placeholder="Enter emails" tags={["Hello"]} />
        <Button
          marginT-20
          labelStyle={{ fontWeight: "800" }}
          backgroundColor={Colors.text}
          color={Colors.white}
          label="Create Card"
        />
      </View>
    </Dialog>
  );
}
