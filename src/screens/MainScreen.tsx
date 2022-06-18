import { StyleSheet, View } from "react-native";
import React, { useEffect } from "react";
import { Headline, Subheading, useTheme } from "react-native-paper";
import text from "@/text";

import Layout from "@/constants/Layout";

// import * as NavigationBar from "expo-navigation-bar";
import { Dimensions } from "react-native";
import TitleNScore from "@/components/TitleNScore";
import DarkThemeSwitch from "@/components/DarkThemeSwitch";
import ProverbGenerator from "@/components/ProverbGenerator/ProverbGenerator";

export default function MainScreen() {
  // const visibility = NavigationBar.useVisibility();
  // NavigationBar.setVisibilityAsync("hidden");
  // useEffect(() => {
  //   if (visibility === "visible") {
  //     setTimeout(() => {
  //       NavigationBar.setVisibilityAsync("hidden");
  //     }, 0); //TODO:zmienic czas
  //   }
  // }, [visibility]);
  const { colors } = useTheme();
  const backgroundStyle = {
    width: Layout.window.width,
    height: Dimensions.get("screen").height,
    backgroundColor: colors.background,
  };
  //TODO: dodac header z toggle theme i contact author?
  return (
    <View style={[styles.container, backgroundStyle]}>
      <View>
        <DarkThemeSwitch />
      </View>
      <View>
        <TitleNScore />
      </View>
      <View>
        <ProverbGenerator />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: "10%",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
