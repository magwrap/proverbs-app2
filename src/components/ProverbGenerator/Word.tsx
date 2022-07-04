import {
  SPACE_FROM_LINE,
  LINE_HEIGHT,
  WINDOW_WIDTH,
  LINE_WIDTH,
  DEFAULT_MARGIN,
  WORD_WIDTH,
  WINDOW_HEIGHT,
  WORD_HEIGHT,
  FONT_SIZE,
} from "@/constants/ProverbConstants";
import { styles } from "@/styles/proverbStyles";
import React, { useEffect } from "react";
import { Platform } from "react-native";
import { PanGestureHandler } from "react-native-gesture-handler";
import { Caption, Colors } from "react-native-paper";
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { snapPoint } from "react-native-redash";

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

  const pressed = useSharedValue(false);
  const space = -SPACE_FROM_LINE - (arrLen + 1) * LINE_HEIGHT;

  const eventHandler = useAnimatedGestureHandler({
    onStart: (event, ctx: { startX: number; startY: number }) => {
      pressed.value = true;
      ctx.startX = x.value;
      ctx.startY = y.value;
      rowCtx.value = rowCtx.value.map((val) => {
        return val.id === word.id
          ? { id: 0, text: "", start: val.start, end: val.end }
          : val;
      });
    },
    onActive: (event, ctx) => {
      x.value = ctx.startX + event.translationX;
      y.value = ctx.startY + event.translationY;
    },
    onEnd: (event, ctx) => {
      pressed.value = false;

      const snapX = (goToVal: number) => {
        const calcPos = (absX: number, absGoToVal: number) => {
          return x.value - Math.abs(absX - absGoToVal);
        };
        const snapPointsX = [calcPos(event.absoluteX, goToVal), WINDOW_WIDTH];

        const snapPointX = snapPoint(x.value, event.velocityX, snapPointsX);

        x.value = withSpring(snapPointX, { velocity: event.velocityX });
        console.log("abs: ", event.absoluteX);
      };

      const goToStartingPos = () => {
        x.value = withSpring(startingPosition);
        y.value = withSpring(startingPosition);
      };

      const withinFieldBorders =
        y.value > space * 1.4 &&
        y.value < space * 0.7 &&
        event.absoluteX >
          WINDOW_WIDTH - LINE_WIDTH - WORD_WIDTH - DEFAULT_MARGIN &&
        event.absoluteX < LINE_WIDTH;

      if (withinFieldBorders) {
        const snapPointsY = [space, WINDOW_HEIGHT - WORD_HEIGHT];
        const snapPointY = snapPoint(y.value, event.velocityY, snapPointsY);
        y.value = withSpring(snapPointY, { velocity: event.velocityY });

        //add word to rowCtx
        for (let i = 0; i < rowCtx.value.length; i++) {
          const currentWord = rowCtx.value[i];
          if (currentWord.text === "") {
            const rowCtxCopy = [...rowCtx.value];
            rowCtxCopy[i] = {
              id: word.id,
              text: word.text,
              start: rowCtx.value[i].start,
              end: rowCtx.value[i].end,
            };
            rowCtx.value = rowCtxCopy;
            if (currentWord.start) {
              snapX(currentWord.start);
            } else {
              goToStartingPos();
            }

            break;
          }
        }
      } else {
        goToStartingPos();
      }
      //check if win
      let win = false;
      for (let i = 1; i < rowCtx.value.length; i++) {
        console.log(
          "check win: ",
          rowCtx.value[i - 1].id,
          " ",
          rowCtx.value[i].id
        );
        if (rowCtx.value[i - 1].id >= rowCtx.value[i].id) {
          break;
        } else if (i === rowCtx.value.length - 1) {
          win = true;
        }
      }

      console.log(win);
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
      <Animated.View style={[styles.word, wordColor, animatedStyle]}>
        <Caption style={fontStyle}>{word.text}</Caption>
      </Animated.View>
    </PanGestureHandler>
  );
};

export default Word;
