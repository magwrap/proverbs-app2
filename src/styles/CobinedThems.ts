import {
  Colors,
  DarkTheme as PaperDarkTheme,
  DefaultTheme as PaperDefaultTheme,
} from "react-native-paper";
import { MyColors } from "@/styles/ColorPallete";

const roundness = 5;

export const CombinedDefaultTheme = {
  ...PaperDefaultTheme,
  roundness,
  colors: {
    ...PaperDefaultTheme.colors,
    primary: MyColors.PRIMARY,
    accent: MyColors.ACCENT,
    // background: MyColors.ACCENT,
  },
};
export const CombinedDarkTheme = {
  ...PaperDarkTheme,
  roundness,
  colors: {
    ...PaperDarkTheme.colors,
    background: Colors.grey900,
    primary: MyColors.PRIMARY,
    accent: MyColors.ACCENT,
  },
};
