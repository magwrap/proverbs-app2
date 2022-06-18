import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Appearance } from "react-native";

const colorScheme = Appearance.getColorScheme();

let initialState: InitialDarkThemeState = {
  isDarkTheme: colorScheme === "dark",
};
const STORAGE_KEY = "@theme";

const storeTheme = async (isDarkTheme: boolean) => {
  try {
    await AsyncStorage.setItem(STORAGE_KEY, isDarkTheme.toString());
  } catch (e) {}
};

export const getTheme = async () => {
  try {
    const theme = await AsyncStorage.getItem(STORAGE_KEY);
    if (theme !== null) {
      return theme === "true";
    }
  } catch (e) {
    return false;
  }
  return false;
};

const DarkThemeSlice = createSlice({
  name: "Dark Theme",
  initialState,
  reducers: {
    toggleTheme: (state, action: PayloadAction<void>) => {
      storeTheme(!state.isDarkTheme);
      state.isDarkTheme = !state.isDarkTheme;
    },
  },
});

export const { toggleTheme } = DarkThemeSlice.actions;
export default DarkThemeSlice.reducer;
