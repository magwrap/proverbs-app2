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

//  const splitIntoLines = (arr: string[]) => {
//     const newArr: WordType[][] = [[]];
//     let lineLength = 0;

//     arr.map((word) => {
//       const wordLength = word.length * FONT_SIZE + WORD_WIDTH;
//       lineLength += wordLength;
//       if (lineLength < LINE_WIDTH) {
//         newArr[newArr.length - 1].push({
//           text: word,
//         });
//       } else {
//         lineLength = 0;
//         newArr.push([
//           {
//             text: word,
//           },
//         ]);
//       }
//     });

//     newArr.map((line) => {
//       return shuffle(line);
//     });

//     return newArr;
//   };
