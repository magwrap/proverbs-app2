import { createSlice, PayloadAction } from "@reduxjs/toolkit"

let initialState: InitialDarkThemeState = {
  isDarkTheme: false,
};

const DarkThemeSlice = createSlice({
  name: 'Dark Theme',
  initialState,
  reducers: {
    toggleTheme : (state, action: PayloadAction<void>) => {
      return {
        isDarkTheme: !state.isDarkTheme,
      }
    } 
  },
}
);

export const { toggleTheme } = DarkThemeSlice.actions;
export default DarkThemeSlice.reducer; 
