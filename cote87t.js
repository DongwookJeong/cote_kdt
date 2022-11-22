// for (let i = 0; i < lineOne1.length; i++) {
//   if (lineOne1[i] === 1) {
//     lineOne1.splice(i, 1);
//     i--;
//   }
// }
// console.log(lineOne1);
const lineThr1 = [0, 0, 1, 0, 0, 0, 0, 0, 0, 0];
const lineFou1 = [0, 0, 0, 1, 0, 0, 0, 0, 0, 0];
const linefiv1 = [0, 0, 0, 0, 1, 0, 0, 0, 0, 0];

const lineOne1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
const lineTwo1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
// const sameSame =
//   lineOne1.length === lineTwo1.length &&
//   lineOne1.every((value, index) => value === lineTwo1[index]);
// console.log(sameSame)

for(let i = 0; i < lineOne1.length; i++){
  if(lineOne1.length === lineTwo1.length &&
    lineOne1.every((value, index) => value === lineTwo1[index])){
      lineOne1.splice(i, 10)
      lineTwo1.splice(i, 10)
    }
}
console.log(lineOne1)
console.log(lineTwo1)