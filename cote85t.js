const lineOne1 = [0, 0, 0, 0, 0, 1, 0, 0, 0, 0];
const lineTwo1 = [0, 0, 0, 0, 0, 1, 0, 0, 0, 0];
const lineThr1 = [0, 0, 0, 0, 0, 1, 0, 0, 0, 0];
const lineFou1 = [0, 0, 0, 0, 0, 1, 0, 0, 0, 0];
const linefiv1 = [0, 0, 0, 0, 0, 1, 0, 0, 0, 0];

const oneLine = {}
for(let i = 0; i < lineOne1.length; i++){
  if(lineOne1[i] === 1){
    lineOne1.splice(i, 1) //! 삭제 수단 중 하나
    i--
  }
}
console.log(lineOne1)
lineOne1.forEach((elem, index)=>{
  oneLine['key'+ index]=elem
})
delete oneLine.key1 //! 삭제 수단 중 하나
console.log(oneLine)
console.log(oneLine.key5)

const twoLine = {}
for(let i = 0; i < lineTwo1.length; i++){
  if(lineTwo1[i] === 1){
    lineTwo1.splice(i, 1)
    i--
  }
}
console.log(lineTwo1)

lineTwo1.forEach((elem, index)=>{
  twoLine['key'+ index]=elem
})
console.log(twoLine)
console.log(twoLine.key5)

