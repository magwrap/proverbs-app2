import { FontSizes } from "@/styles/Fonts";
import { Dimensions } from "react-native";

export const FONT_SIZE = FontSizes.MEDIUM;
export const WORD_HEIGHT = FONT_SIZE * 2 + 10;
export const WORD_PADDING = 15;
export const WORD_MARGIN = 2;
export const WORD_WIDTH = 2 * WORD_PADDING + 2 * WORD_MARGIN + FONT_SIZE;

export const DEFAULT_MARGIN = 4;

export const WINDOW_WIDTH = Dimensions.get("window").width;
export const WINDOW_HEIGHT = Dimensions.get("window").height;
export const LINE_WIDTH = WINDOW_WIDTH * 0.8;
export const LINE_HEIGHT = WORD_HEIGHT + 2 * DEFAULT_MARGIN;
export const SPACE_FROM_LINE = LINE_HEIGHT * 1;
