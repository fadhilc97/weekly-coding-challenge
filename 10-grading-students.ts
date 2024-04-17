function gradingStudents(grades: number[]): number[] {
  return grades.map((grade) => {
    // proses mencari nilai kelipatan 5 setelahnya
    let nextGradeMultiple5 = grade;
    while (nextGradeMultiple5 % 5 !== 0) {
      nextGradeMultiple5++;
    }

    // proses pembulatan nilai
    // if (nextGradeMultiple5 - grade < 3 && nextGradeMultiple5 >= 40) {
    //   return nextGradeMultiple5;
    // }
    // return grade;
    return nextGradeMultiple5 - grade < 3 && nextGradeMultiple5 >= 40
      ? nextGradeMultiple5
      : grade;
  });
}

console.log(gradingStudents([73, 67, 38, 33])); // [75, 67, 40, 33]
console.log(gradingStudents([35, 40, 55, 76])); // [35, 40, 55, 76]
