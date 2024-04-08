function birthdayCakeCandles(candles: number[]): number {
  const maxCandleHeight = Math.max(...candles);
  return candles.filter((candle) => candle === maxCandleHeight).length;
}

console.log(birthdayCakeCandles([6, 7, 4, 4, 4, 2, 3, 7, 7, 7, 6]));
