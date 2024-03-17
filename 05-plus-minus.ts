function plusMinus(arr: number[]): void {
  // Write your code here
  const arrLength = arr.length;

  const arrPositive = arr.filter((x) => x > 0);
  const arrNegative = arr.filter((x) => x < 0);
  const arrZero = arr.filter((x) => x === 0);

  const positiveRatio = arrPositive.length / arrLength;
  const negativeRatio = arrNegative.length / arrLength;
  const zeroRatio = arrZero.length / arrLength;

  console.log(positiveRatio.toFixed(6));
  console.log(negativeRatio.toFixed(6));
  console.log(zeroRatio.toFixed(6));
}

plusMinus([-4, 3, -9, 0, 4, 1]);
