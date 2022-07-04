import React from "react";
import { useSharedValue } from "react-native-reanimated";
import Word from "./Word";

const WordsRow = ({
  wordArr,
  arrLen,
}: {
  wordArr: WordType[];
  arrLen: number;
}) => {
  const rowContext = useSharedValue<WordType[]>([]);
  return (
    <>
      {wordArr.map((word, i) => {
        return <Word word={word} arrLen={arrLen} rowCtx={rowContext} key={i} />;
      })}
    </>
  );
};

export default WordsRow;
