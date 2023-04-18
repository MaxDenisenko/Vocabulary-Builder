import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import * as Font from "expo-font";
import { Provider } from "react-redux";

import RobotoBold from "./src/assets/fonts/Roboto/Roboto-Bold.ttf";
import RobotoMedium from "./src/assets/fonts/Roboto/Roboto-Medium.ttf";
import RobotoRegular from "./src/assets/fonts/Roboto/Roboto-Regular.ttf";
import fonticons from "./src/assets/fonts/fontIcon/fonticons.ttf";

import Navigator from "./src/components/Navigator";
import store from "./src/external/redux/store";

export default function App() {
  const [fontsStatus, setFontsStatus] = useState(false);

  useEffect(() => {
    const getFonts = async () => {
      await Font.loadAsync({ RobotoBold, RobotoMedium, RobotoRegular, fonticons });
      setFontsStatus(true);
    };
    getFonts();
  }, []);
  if (!fontsStatus) {
    return <ActivityIndicator size="small" />;
  } else {
    return (
      <Provider store={store}>
        <Navigator></Navigator>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 19,
    fontFamily: "RobotoBold",
  },
});
