function countApplesAndOranges(
  s: number,
  t: number,
  a: number,
  b: number,
  apples: number[],
  oranges: number[]
): void {
  // Langkah 1: Tentukan posisi masing-masing buah
  const applesPosition = apples.map((apple) => a + apple);
  const orangesPosition = oranges.map((orange) => b + orange);

  // Langkah 2: Tentukan posisi masing-masing buah yang jatuh di rumah
  const positionFilter = (fruitPos: number) => fruitPos >= s && fruitPos <= t;
  const applesPositionInHouse = applesPosition.filter(positionFilter);
  const orangesPositionInHouse = orangesPosition.filter(positionFilter);

  console.log(applesPositionInHouse.length);
  console.log(orangesPositionInHouse.length);
}

// countApplesAndOranges(7, 10, 4, 12, [2, 3, -4], [3, -2, -4]);
countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6]);
