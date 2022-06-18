import {
  toggleTheme,
  useAppDispatch,
  useAppSelector,
} from "@/hooks/reduxHooks";
import React from "react";
import { Switch, useTheme } from "react-native-paper";

interface DarkThemeSwitchProps {}

const DarkThemeSwitch: React.FC<DarkThemeSwitchProps> = ({}) => {
  const theme = useTheme();
  const isThemeDark = useAppSelector(
    (state) => state.DarkThemeReducer.isDarkTheme
  );
  const dispatch = useAppDispatch();

  const _toggle = () => {
    dispatch(toggleTheme());
  };
  return (
    <Switch
      style={[{ backgroundColor: theme.colors.accent }]}
      color={theme.colors.primary}
      value={isThemeDark}
      onValueChange={_toggle}
    />
  );
};

export default DarkThemeSwitch;
