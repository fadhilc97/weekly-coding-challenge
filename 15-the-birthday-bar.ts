function birthday(s: number[], d: number, m: number): number {
  const endIndex = s.length - m;
  const matchedArray: number[][] = [];
  for (let i = 0; i <= endIndex; i++) {
    const subArray = s.slice(i, i + m);
    const sumSubArray = subArray.reduce((acc, curr) => acc + curr, 0);
    if (sumSubArray === d) {
      matchedArray.push(subArray);
    }
  }
  return matchedArray.length;
}

console.log(birthday([1, 2, 1, 3, 2], 3, 2));
console.log(birthday([1, 1, 1, 1, 1, 1], 3, 2));
console.log(birthday([4], 4, 1));
