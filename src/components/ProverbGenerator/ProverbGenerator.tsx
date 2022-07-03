import { Platform, View } from "react-native";
import React from "react";
import { Caption, Colors, Divider, useTheme } from "react-native-paper";
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedRef,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { PanGestureHandler } from "react-native-gesture-handler";
import { shuffle } from "./proverbHelpers";

import { snapPoint } from "react-native-redash";
import {
  DEFAULT_MARGIN,
  FONT_SIZE,
  LINE_HEIGHT,
  LINE_WIDTH,
  SPACE_FROM_LINE,
  WINDOW_HEIGHT,
  WINDOW_WIDTH,
  WORD_HEIGHT,
  WORD_WIDTH,
} from "@/constants/ProverbConstants";
import { styles } from "@/styles/proverbStyles";

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

const Word = ({
  word,
  arrLen,
  rowCtx,
}: {
  word: WordType;
  arrLen: number;
  rowCtx: Animated.SharedValue<WordType[]>;
}) => {
  const startingPosition = 0;
  const x = useSharedValue(startingPosition);
  const y = useSharedValue(startingPosition);
  const wordRef = useAnimatedRef();

  const pressed = useSharedValue(false);
  const space = -SPACE_FROM_LINE - (arrLen + 1) * LINE_HEIGHT;
  const leftBorder = WINDOW_WIDTH - LINE_WIDTH;
  const margin = DEFAULT_MARGIN;

  const eventHandler = useAnimatedGestureHandler({
    onStart: (event, ctx: { startX: number; startY: number }) => {
      pressed.value = true;
      ctx.startX = x.value;
      ctx.startY = y.value;

      for (let i = 0; i < rowCtx.value.length; i++) {
        if (rowCtx.value[i].text === word.text) {
          rowCtx.value = rowCtx.value.slice(0, i);
          break;
        }
      }
    },
    onActive: (event, ctx) => {
      x.value = ctx.startX + event.translationX;
      y.value = ctx.startY + event.translationY;
    },
    onEnd: (event, ctx) => {
      const calcPos = (absX: number, absGoToVal: number) => {
        return x.value - (absX - absGoToVal);
      };

      const snapX = (goToVal: number) => {
        const snapPointsX = [
          calcPos(event.absoluteX, goToVal),
          WINDOW_WIDTH - WORD_WIDTH,
        ];

        const snapPointX = snapPoint(x.value, event.velocityX, snapPointsX);

        x.value = withSpring(snapPointX, { velocity: event.velocityX });
        console.log("abs: ", event.absoluteX);
        rowCtx.value.push({
          ...word,
          start: goToVal,
          end: goToVal + WORD_WIDTH + DEFAULT_MARGIN,
        });
      };

      const goToStartingPos = () => {
        x.value = withSpring(startingPosition);
        y.value = withSpring(startingPosition);
      };
      pressed.value = false;

      if (
        y.value > space * 1.4 &&
        y.value < space * 0.7 &&
        event.absoluteX >
          WINDOW_WIDTH - LINE_WIDTH - WORD_WIDTH - DEFAULT_MARGIN &&
        event.absoluteX < LINE_WIDTH
      ) {
        const snapPointsY = [space, WINDOW_HEIGHT - WORD_HEIGHT];
        const snapPointY = snapPoint(y.value, event.velocityY, snapPointsY);
        y.value = withSpring(snapPointY, { velocity: event.velocityY });

        if (rowCtx.value.length === 0) {
          snapX(leftBorder);
        } else {
          const prevWord = rowCtx.value[rowCtx.value.length - 1];
          const goToVal = prevWord.end ? prevWord.end + margin : 0 + margin;
          snapX(goToVal);
        }
      } else {
        goToStartingPos();
      }
      console.log(rowCtx.value);
    },
  });

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: x.value }, { translateY: y.value }],
    };
  });
  const fontFamily = Platform.OS === "ios" ? "Courier" : "monospace";
  const fontStyle = { fontSize: FONT_SIZE, color: Colors.white, fontFamily };
  const randomColor = Math.floor(Math.random() * 16777215).toString(16); //TODO: dodaj jakas pule kolorow(array) i z niej bedzie losowac
  const wordColor = {
    backgroundColor: "#" + randomColor,
  };

  return (
    <PanGestureHandler onGestureEvent={eventHandler}>
      <Animated.View
        style={[styles.word, wordColor, animatedStyle]}
        ref={wordRef}>
        <Caption style={fontStyle}>{word.text}</Caption>
      </Animated.View>
    </PanGestureHandler>
  );
};

export default function ProverbGenerator() {
  //TODO: losuje z pobranych slow jedno

  //TODO: losuje tez randomowe slowa z innym przyslow i miesza je z tym przyslowiem
  const randomWordsArr = [
    ["A", "l", "i", "c", "j", "a"],
    ["A", "n", "d", "r", "z", "e", "j"],
  ];
  const { colors } = useTheme();

  const convertAndShuffle = (arrArr: string[][]) => {
    const newArr: WordType[][] = [];
    arrArr.map((arr, i) => {
      newArr.push([]);
      arr.map((word) => {
        newArr[i].push({
          text: word,
        });
      });
    });

    newArr.map((line) => {
      return shuffle(line);
    });

    return newArr;
  };

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
