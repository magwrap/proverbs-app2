import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Headline, Subheading, useTheme } from "react-native-paper";
import text from "@/text";
import { FontSizes } from "@/styles/Fonts";
import { useAppSelector } from "@/hooks/reduxHooks";

export default function TitleNScore() {
  const { colors } = useTheme();
  const titleColor = { color: colors.text };
  const currentScore = useAppSelector((state) => state.ScoreReducer.score);
  return (
    <>
      <Headline style={[styles.title, titleColor]}>{text.title}</Headline>
      <Subheading
        style={styles.score}>{`${text.score} ${currentScore}`}</Subheading>
    </>
  );
}

const styles = StyleSheet.create({
  title: { fontSize: FontSizes.HUGE, textAlign: "center" },
  score: { textAlign: "center" },
});
