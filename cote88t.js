
const lineThr1 = [0, 0, 1, 0, 0, 0, 0, 0, 0, 0];
const lineFou1 = [0, 0, 0, 1, 0, 0, 0, 0, 0, 0];
const linefiv1 = [0, 0, 0, 0, 1, 0, 0, 0, 0, 0];

const lineOne1 = [1, 0, 0, 0, 0, 0, 0, 0, 0, 0];
const lineTwo1 = [1, 0, 0, 0, 0, 0, 0, 0, 0, 0];



const array = []
array.push(lineOne1, lineTwo1, lineThr1, lineFou1, linefiv1)
console.log(array[2][2])
console.log(array[3][2])
for(let i = 0; i < array.length; i++){
  if(array[0][0]===1&&array[0][0]===array[1][0]){
    // array[0][0].splice(0,1)
    delete array[0][0]
  }
}
console.log(array[0])
console.log(array[0].length)


// ? 배열 5개가 입력되면 비효율적
// for(let i = 0; i < lineOne1.length; i++){
//   if(lineOne1.length === lineTwo1.length &&
//     lineOne1.every((value, index) => value === lineTwo1[index])){
//       lineOne1.splice(i, 10)
//       lineTwo1.splice(i, 10)
//     }
// }
// console.log(lineOne1)
// console.log(lineTwo1)