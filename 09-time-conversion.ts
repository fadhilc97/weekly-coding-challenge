function timeConversion(s: string): string {
  const timeSplitted = s.split(":");
  const timeHour = timeSplitted[0];
  const time12HFormat = timeSplitted[2].slice(2);

  let convertedHour = timeHour === "12" ? "00" : timeHour;
  convertedHour =
    time12HFormat === "PM"
      ? (parseInt(convertedHour) + 12).toString()
      : convertedHour;

  return `${convertedHour}:${timeSplitted[1]}:${timeSplitted[2].replace(
    time12HFormat,
    ""
  )}`;
}

console.log(timeConversion("12:30:45AM"));
console.log(timeConversion("12:15:00PM"));
console.log(timeConversion("05:30:15AM"));
console.log(timeConversion("10:30:00PM"));
