//! 일단 한 줄만 진행 + 조건문(여러개의 배열)
const lineOne1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
const lineThr1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
const lineFou1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
const linefiv1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

const splice1line = lineOne1.splice(6, 1, 1);


for(let i = 0; i < lineOne1.length; i++){
  if(lineOne1[i] === 1){
    lineOne1.splice(i, 1)
    i--
  }
}
console.log(lineOne1)

// ! 배열 객체화
const lineTwo1 = [0, 0, 0, 0, 0, 1, 0, 0, 0, 0];
const twoLine = {}
lineTwo1.forEach((elem, index)=>{
  twoLine['key'+ index]=elem
})
console.log(twoLine)
console.log(twoLine.key5)