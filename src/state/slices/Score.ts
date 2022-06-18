import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";

let initialState: InitialScoreState = {
  score: 0,
};
const STORAGE_KEY = "@score";

export const storeBestScore = async (score: number) => {
  try {
    await AsyncStorage.setItem(STORAGE_KEY, score.toString());
  } catch (e) {}
};

export const getBestScore = async () => {
  try {
    const score = await AsyncStorage.getItem(STORAGE_KEY);
    if (score !== null) {
      return +score;
    }
  } catch (e) {
    return 0;
  }
  return 0;
};

const ScoreSlice = createSlice({
  name: "Score",
  initialState,
  reducers: {
    setScore: (state, action: PayloadAction<number>) => {
      state.score += action.payload;
    },
    resetScore: (state) => {
      state.score = 0;
    },
  },
});

export const { setScore, resetScore } = ScoreSlice.actions;
export default ScoreSlice.reducer;
