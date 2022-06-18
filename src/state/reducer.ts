import { combineReducers } from '@reduxjs/toolkit';
import CurrentUserReducer from './slices/CurrentUser';
import DarkThemeReducer from './slices/DarkTheme';

const rootReducer = combineReducers({CurrentUserReducer, DarkThemeReducer})
export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>