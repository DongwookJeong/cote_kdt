const lineThr1 = [1, 0, 1, 0, 0, 0, 0, 0, 0, 0];
const lineFou1 = [1, 0, 0, 1, 0, 0, 0, 0, 0, 0];
const linefiv1 = [1, 0, 0, 0, 1, 0, 0, 0, 0, 0];

const lineOne1 = [1, 0, 0, 0, 0, 0, 0, 0, 0, 0];
const lineTwo1 = [1, 0, 0, 0, 0, 0, 0, 0, 0, 0];

const array = [];
array.push(lineOne1, lineTwo1, lineThr1, lineFou1, linefiv1);
// console.log(array[0]);
// console.log(array[1]);
for (let i = 0; i < array.length; i++) {
  if (
    array[i][i] === 1 &&
    array[0][0] === array[1][0] &&
    array[0][0] === array[2][0] &&
    array[0][0] === array[3][0] &&
    array[0][0] === array[4][0]
  ) {
    array[i].splice(0,1)
    array[i+1].splice(0,1)
    array[i+2].splice(0,1)
    array[i+3].splice(0,1)
    array[i+4].splice(0,1)
  }
}

// console.table(array[0]);
console.log(array[0].length);
console.table(array);
// console.log(array[0]);
// function bingo(){

// }
