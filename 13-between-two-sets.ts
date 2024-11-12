function getTotalX(a: number[], b: number[]): number {
  let x = Math.max(...a);
  const desiredX: number[] = [];
  const maxOverall = Math.max(...a, ...b);

  while (x <= maxOverall) {
    const isXDivisibleByA = a.every((aNumber) => x % aNumber === 0);
    const isBDivisibleByX = b.every((bNumber) => bNumber % x === 0);

    if (isXDivisibleByA && isBDivisibleByX) {
      desiredX.push(x);
    }

    x += Math.max(...a);
  }

  return desiredX.length;
}

console.log(getTotalX([2, 4], [16, 32, 96]));
