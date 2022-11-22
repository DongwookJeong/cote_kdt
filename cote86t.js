const lineOne1 = [0, 0, 0, 0, 0, 1, 0, 0, 0, 0];
const lineTwo1 = [0, 0, 0, 0, 0, 1, 0, 0, 0, 0];
const lineThr1 = [0, 0, 0, 0, 0, 1, 0, 0, 0, 0];
const lineFou1 = [0, 0, 0, 0, 0, 1, 0, 0, 0, 0];
const linefiv1 = [0, 0, 0, 0, 0, 1, 0, 0, 0, 0];

const oneLine = {}
// console.log(lineOne1)
lineOne1.forEach((elem, index)=>{
  oneLine['key'+ index]=elem
  if(oneLine[index] === 1){
  }
})
delete oneLine
// delete oneLine.key1 
console.log(oneLine.key)
// console.log(oneLine.key5)




// for(let i = 0; i < lineOne1.length; i++){
//   if(lineOne1[i] === 1){
//     lineOne1.splice(i, 1) //! 삭제 수단 중 하나
//     i--
//   }
// }