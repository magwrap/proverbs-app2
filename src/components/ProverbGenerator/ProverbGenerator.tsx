import { StyleSheet, View } from "react-native";
import React from "react";
import { Caption, Surface } from "react-native-paper";
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { PanGestureHandler } from "react-native-gesture-handler";

const Word = ({ word }: { word: string }) => {
  const startingPosition = 0;
  //koordynaty polozenia kuli
  const x = useSharedValue(startingPosition);
  const y = useSharedValue(startingPosition);

  const pressed = useSharedValue(false);

  const eventHandler = useAnimatedGestureHandler({
    onStart: (event, ctx) => {
      pressed.value = true;
    },
    onActive: (event, ctx) => {
      //event.translationX --> relatywne przesuniecie wzgledem pozycji startowej
      x.value = startingPosition + event.translationX;
      y.value = startingPosition + event.translationY;
    },
    onEnd: (event, ctx) => {
      pressed.value = false;
      //pilka wraca na swoje miejsce z animacja odbicia
      x.value = withSpring(startingPosition);
      y.value = withSpring(startingPosition);
    },
  });

  const animatedStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: pressed.value ? "#FEEF86" : "#001972",
      transform: [{ translateX: x.value }, { translateY: y.value }], //przemieszczamy pilke
    };
  });

  return (
    <PanGestureHandler onGestureEvent={eventHandler}>
      <Animated.View style={[styles.word, animatedStyle]}>
        <Caption>{word}</Caption>
      </Animated.View>
    </PanGestureHandler>
  );
};

export default function ProverbGenerator() {
  //TODO: losuje z pobranych przyslow jedno
  const randomProverb = "Jak Kuba Bogu tak Bóg Kubie";
  //TODO: losuje tez randomowe slowa z innym przyslow i miesza je z tym przyslowiem
  const randomProverbArr = randomProverb.split(" ");
  return (
    <View style={styles.container}>
      <View style={styles.underline} />
      {/* <Word word={"as"} /> */}
      <View style={styles.words}>
        {randomProverbArr.map((word, i) => {
          return <Word word={word} key={i} />;
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  underline: {
    width: "80%",
    height: 100,
    borderBottomWidth: 1,
    alignSelf: "center",
  },
  words: { width: "100%", height: 100, flexDirection: "row" },
  word: {
    padding: 4,
    height: 30,
    // width: 20,
    margin: 5,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    elevation: 4,
  },
});
