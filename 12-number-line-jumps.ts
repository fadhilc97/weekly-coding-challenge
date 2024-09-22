function kangaroo(x1: number, v1: number, x2: number, v2: number): string {
  const xDiff = Math.abs(x1 - x2);
  const vDiff = Math.abs(v1 - v2);

  if (
    (((x1 > x2 && v1 < v2) || (x1 < x2 && v1 > v2)) && xDiff % vDiff === 0) ||
    x1 === x2
  ) {
    return "YES";
  }

  return "NO";
}

console.log(kangaroo(0, 3, 4, 2));
console.log(kangaroo(0, 2, 5, 3));
console.log(kangaroo(0, 4, 4, 1));
