function staircase(n: number): void {
  const spaceChar = " ";
  const hashChar = "#";
  let row = "";
  for (let i = 1; i <= n; i++) {
    row += spaceChar.repeat(n - i);
    row += hashChar.repeat(i);
    row += "\n";
  }
  console.log(row);
}

staircase(6);
