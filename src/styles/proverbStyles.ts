import {
  DEFAULT_MARGIN,
  LINE_HEIGHT,
  LINE_WIDTH,
  SPACE_FROM_LINE,
  WORD_HEIGHT,
  WORD_MARGIN,
  WORD_PADDING,
} from "@/constants/ProverbConstants";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: { flex: 1 },

  underline: {
    width: LINE_WIDTH,
    height: LINE_HEIGHT,
    alignSelf: "center",
    borderRadius: 5,
    borderBottomWidth: 1,
  },
  emptySpace: {
    height: SPACE_FROM_LINE,
  },
  words: {
    width: LINE_WIDTH,
    flexDirection: "row",
    justifyContent: "center",
  },
  word: {
    paddingHorizontal: WORD_PADDING,
    height: WORD_HEIGHT,
    marginHorizontal: WORD_MARGIN,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    marginTop: DEFAULT_MARGIN,
    elevation: 3,
  },
});
