import React, { useState } from "react";
import AppLoading from "expo-app-loading";
import { Text } from "react-native";
import * as Font from "expo-font";
import { Asset, useAssets } from "expo-asset";
import { Ionicons } from "@expo/vector-icons";

export default function App() {
  const [assets] = useAssets([require("./sunssc.png")]);
  const [loaded] = Font.useFonts(Ionicons.font);

  if (!assets || !loaded) {
    return <AppLoading />;
  }
  return <Text>We are done!!</Text>;
}
