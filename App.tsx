import { StatusBar } from "expo-status-bar";
import React from "react";
import useCachedResources from "./src/hooks/useCachedResources";
import Routes from "@/navigation/Routes";
import "react-native-gesture-handler";
import { Provider } from "react-redux";
import { store } from "@/state";

import {
  NavigationContainer,
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from "@react-navigation/native";
import {
  DarkTheme as PaperDarkTheme,
  DefaultTheme as PaperDefaultTheme,
  Provider as PaperProvider,
} from "react-native-paper";
import { MyColors } from "@/styles/ColorPallete";
import { useAppSelector } from "@/hooks/reduxHooks";
import { CombinedDarkTheme, CombinedDefaultTheme } from "@/styles/CobinedThems";

export default function App() {
  const isLoadingComplete = useCachedResources();

  const Themes = () => {
    const isThemeDark = useAppSelector(
      (state) => state.DarkThemeReducer.isDarkTheme
    );
    let theme = isThemeDark ? CombinedDarkTheme : CombinedDefaultTheme;
    return (
      <PaperProvider theme={theme}>
        <NavigationContainer theme={theme}>
          <Routes />
          <StatusBar />
        </NavigationContainer>
      </PaperProvider>
    );
  };

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <Provider store={store}>
        <Themes />
      </Provider>
    );
  }
}
