import { StyleSheet, View } from "react-native";
import React from "react";
import { Caption, Switch } from "react-native-paper";
import { toggleTheme, useAppDispatch } from "@/hooks/reduxHooks";

export default function DarkThemeSwitch() {
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);
  const dispatch = useAppDispatch();

  const onToggleSwitch = () => {
    dispatch(toggleTheme());
    setIsSwitchOn(!isSwitchOn);
  };

  return (
    <View style={styles.themeSwitch}>
      <Caption>Toggle theme: </Caption>
      <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
    </View>
  );
}

const styles = StyleSheet.create({
  themeSwitch: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
});
