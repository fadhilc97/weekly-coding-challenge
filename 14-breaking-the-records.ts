function breakingRecords(scores: number[]): number[] {
  let highestScore: number = scores[0];
  let lowestScore: number = scores[0];

  let highestCount: number = 0;
  let lowestCount: number = 0;

  scores.forEach((score) => {
    if (score > highestScore) {
      highestScore = score;
      highestCount++;
    } else if (score < lowestScore) {
      lowestScore = score;
      lowestCount++;
    }
  });

  return [highestCount, lowestCount];
}

console.log(breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1]));
console.log(breakingRecords([3, 4, 21, 36, 10, 28, 35, 5, 24, 42]));
