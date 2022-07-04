import Animated from "react-native-reanimated";

export function shuffle(array: WordType[]) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

export const convertAndShuffle = (arrArr: string[][]) => {
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
