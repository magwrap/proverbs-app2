import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { Provider } from "react-redux";
import { Provider as PaperProvider } from "react-native-paper";
import { CombinedDarkTheme, CombinedDefaultTheme } from "@/styles/CobinedThems";
import { getTheme, store } from "@/state";
import {
  toggleTheme,
  useAppDispatch,
  useAppSelector,
} from "@/hooks/reduxHooks";

import MainScreen from "@/screens/MainScreen";

export default function App() {
  const Themes = ({ children }: { children: React.ReactNode }) => {
    useEffect(() => {
      (async () => {
        const wasThemeDark = await getTheme();
        if (wasThemeDark !== isThemeDark) {
          dispatch(toggleTheme());
        }
      })();
    }, []);

    const dispatch = useAppDispatch();
    const isThemeDark = useAppSelector(
      (state) => state.DarkThemeReducer.isDarkTheme
    );

    let theme = isThemeDark ? CombinedDarkTheme : CombinedDefaultTheme;
    return <PaperProvider theme={theme}>{children}</PaperProvider>;
  };

  return (
    <Provider store={store}>
      <Themes>
        <MainScreen />
        <StatusBar />
      </Themes>
    </Provider>
  );
}
