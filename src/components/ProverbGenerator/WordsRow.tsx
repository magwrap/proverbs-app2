import {
  LINE_WIDTH,
  WINDOW_WIDTH,
  WORD_WIDTH,
} from "@/constants/ProverbConstants";
import React, { useLayoutEffect } from "react";
import { useSharedValue } from "react-native-reanimated";
import Word from "./Word";

const WordsRow = ({
  wordArr,
  arrLen,
}: {
  wordArr: WordType[];
  arrLen: number;
}) => {
  //create arr with fixed positions of words
  const leftBorder = WINDOW_WIDTH - LINE_WIDTH;

  let rowContext = useSharedValue<WordType[]>(
    Array(wordArr.length).fill({ text: "", start: 0, end: 0 })
  );
  useLayoutEffect(() => {
    rowContext.value = rowContext.value.map((word, i, arr) => {
      const start = leftBorder + i * WORD_WIDTH;
      const end = leftBorder + (i + 1) * WORD_WIDTH;
      console.log("index: ", i, ", start:  ", start, " end: ", end);
      return {
        id: 0,
        text: "",
        start,
        end,
      };
    });
  }, []);

  return (
    <>
      {wordArr.map((word, i) => {
        return <Word word={word} arrLen={arrLen} rowCtx={rowContext} key={i} />;
      })}
    </>
  );
};

export default WordsRow;
