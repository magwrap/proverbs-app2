import { combineReducers } from "@reduxjs/toolkit";
import DarkThemeReducer from "./slices/DarkTheme";
import ScoreReducer from "./slices/Score";
const rootReducer = combineReducers({
  DarkThemeReducer,
  ScoreReducer,
});
export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
