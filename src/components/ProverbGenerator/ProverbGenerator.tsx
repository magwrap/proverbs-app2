import { View } from "react-native";
import React from "react";
import { Divider } from "react-native-paper";

import { convertAndShuffle } from "./proverbHelpers";

import { LINE_HEIGHT } from "@/constants/ProverbConstants";
import { styles } from "@/styles/proverbStyles";
import WordsRow from "./WordsRow";

export default function ProverbGenerator() {
  //TODO: losuje z pobranych slow jedno

  //TODO: losuje tez randomowe slowa z innym przyslow i miesza je z tym przyslowiem
  const randomWordsArr = [
    ["A", "l", "i", "c", "j", "a"],
    ["A", "n", "d", "r", "z", "e", "j"],
  ];

  const splittedProverbArr = convertAndShuffle(randomWordsArr);

  return (
    <View style={styles.container}>
      {[...Array(splittedProverbArr.length)].map((_, i) => {
        return <Divider style={[styles.underline]} key={i} />;
      })}
      <View style={styles.emptySpace} />
      {splittedProverbArr.map((wordArr, i) => {
        const marginTop = { marginTop: LINE_HEIGHT };
        return (
          <React.Fragment key={i}>
            <View style={[styles.words, marginTop]}>
              <WordsRow wordArr={wordArr} arrLen={splittedProverbArr.length} />
            </View>
            {i > 0 && i < splittedProverbArr.length ? (
              <Divider style={{ height: 1 }} />
            ) : null}
          </React.Fragment>
        );
      })}
    </View>
  );
}
