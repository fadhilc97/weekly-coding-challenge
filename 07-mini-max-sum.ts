function miniMaxSum(arr: number[]): void {
  // solusi 1 (menggunakan forEach())
  // const sumResults: number[] = [];
  // arr.forEach((ignoredNumber) => {
  //   const result = arr
  //     .filter((a) => a !== ignoredNumber)
  //     .reduce((acc, curr) => acc + curr, 0);
  //   sumResults.push(result);
  // });
  // const minResult = Math.min(...sumResults);
  // const maxResult = Math.max(...sumResults);
  // console.log(minResult, maxResult);

  // solusi 2 (menggunakan map())
  // const sumResults = arr.map((ignoredNumber) =>
  //   arr.filter((a) => a !== ignoredNumber).reduce((acc, curr) => acc + curr, 0)
  // );
  // const minResult = Math.min(...sumResults);
  // const maxResult = Math.max(...sumResults);
  // console.log(minResult, maxResult);

  // solusi 3 (menggunakan min-max dari arr)
  const minArr = Math.min(...arr);
  const maxArr = Math.max(...arr);
  const arrSum = arr.reduce((acc, curr) => acc + curr, 0);
  console.log(arrSum - maxArr, arrSum - minArr);
}

miniMaxSum([5, 5, 5, 5, 5]);
