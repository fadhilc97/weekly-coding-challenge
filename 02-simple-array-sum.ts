// Simple Array Sum
// https://www.hackerrank.com/challenges/simple-array-sum/problem?isFullScreen=true

function simpleArraySum(ar: number[]): number {
  // Cara 1: Menggunakan for loop
  // let result: number = 0;
  // for (let i = 0; i < ar.length; i++) {
  //   result = result + ar[i];
  // }
  // return result;

  // Cara 2: Menggunakan fungsi reduce
  return ar.reduce((acc, curr) => acc + curr, 0);
}

console.log(simpleArraySum([1, 2, 3, 4, 10, 11]));

// 1 2 3 4 10 11 = length 6 (index 0 sampai 5)
// [1, 2, 3, 4, 10, 11] => 31
