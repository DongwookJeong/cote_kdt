//! 일단 한 줄만 진행
const lineOne1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

const splice1line = lineOne1.splice(6, 1, 1);
console.log(lineOne1);
/*
콘솔 lineOne1 (6, 1)
[
  0, 0, 0, 0, 0,
  0, 0, 0, 0
]

콘솔 lineOne1 (6, 1, 1)
[
  0, 0, 0, 0, 0,
  0, 1, 0, 0, 0
]
*/

console.log(splice1line);
/*
콘솔 splice1line
[
  0
]
*/
