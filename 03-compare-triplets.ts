// a = [1, 2, 3]
// b = [3, 2, 1]
// return = [1, 1]

function compareTriplets(a: number[], b: number[]): number[] {
  let aliceScore = 0;
  let bobScore = 0;

  for (let i = 0; i < a.length; i++) {
    if (a[i] > b[i]) {
      aliceScore++;
    } else if (a[i] < b[i]) {
      bobScore++;
    }
  }

  return [aliceScore, bobScore];
}

console.log(compareTriplets([5, 6, 7], [3, 6, 10]));
console.log(compareTriplets([17, 28, 30], [99, 16, 8]));
