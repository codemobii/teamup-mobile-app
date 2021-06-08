import React from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import ReactNativeParallaxHeader from "react-native-parallax-header";
import { Colors, Text } from "react-native-ui-lib";
import ProjectCARD from "../../components/cards/project";

const { height: SCREEN_HEIGHT } = Dimensions.get("window");

const IS_IPHONE_X = SCREEN_HEIGHT === 812 || SCREEN_HEIGHT === 896;
const STATUS_BAR_HEIGHT = Platform.OS === "ios" ? (IS_IPHONE_X ? 44 : 20) : 0;
const HEADER_HEIGHT = Platform.OS === "ios" ? (IS_IPHONE_X ? 88 : 64) : 64;
const NAV_BAR_HEIGHT = HEADER_HEIGHT - STATUS_BAR_HEIGHT;

const renderNavBar = () => (
  <View style={styles.navContainer}>
    <View style={styles.statusBar} />
    <View style={styles.navBar}>
      <TouchableOpacity style={styles.iconLeft} onPress={() => {}}>
        {/* <Text style={{ color: "white" }}>About</Text> */}
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconRight} onPress={() => {}}>
        <Text
          style={{
            color: "white",
            fontWeight: "bold",
          }}
        >
          Filter
        </Text>
      </TouchableOpacity>
    </View>
  </View>
);

const title = () => {
  return (
    <Text text100 style={styles.titleStyle}>
      Cards
    </Text>
  );
};

const MainLAYOUT = ({ children }) => {
  const renderContent = () => {
    return children;
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <ReactNativeParallaxHeader
        headerMinHeight={HEADER_HEIGHT}
        headerMaxHeight={120}
        extraScrollHeight={30}
        backgroundColor={Colors.text}
        navbarColor={Colors.text}
        titleStyle={styles.titleStyle}
        title={title()}
        renderNavBar={renderNavBar}
        renderContent={renderContent}
        containerStyle={styles.container}
        contentContainerStyle={styles.contentContainer}
        innerContainerStyle={styles.container}
        scrollViewProps={{
          onScrollBeginDrag: () => console.log("onScrollBeginDrag"),
          onScrollEndDrag: () => console.log("onScrollEndDrag"),
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flexGrow: 1,
    backgroundColor: Colors.grey60,
    padding: 20,
  },
  navContainer: {
    height: HEADER_HEIGHT,
    marginHorizontal: 20,
  },
  statusBar: {
    height: STATUS_BAR_HEIGHT,
    backgroundColor: "transparent",
  },
  navBar: {
    height: NAV_BAR_HEIGHT,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "transparent",
  },
  titleStyle: {
    color: "white",
    fontWeight: "bold",
    fontSize: 25,
    paddingTop: 20,
  },
});

export default MainLAYOUT;
