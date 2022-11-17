const inputData = [6, 2, 9, 8, 4, 0, 8, 5, 7, 1]
const step = 0

// let re = inputData.push(4, 6)
// console.log(inputData)
// console.log(re)
// console.log(inputData[1])
// console.log(inputData[0])

if(inputData[0]>inputData[1]){
  inputData.push(inputData[0])
  inputData.shift(inputData[0])
  console.log(inputData)
}else if(inputData[0]<inputData[1]){
  inputData.push(inputData[1])
  inputData.shift(inputData[0])
  console.log(inputData)
}
inputData.forEach(index => {
  if(inputData[0]>inputData[1]){
    inputData.push(inputData[0])
    inputData.shift(inputData[0])
    console.log(inputData)
  }else if(inputData[0]<inputData[1]){
    inputData.push(inputData[1])
    inputData.shift(inputData[0])
    console.log(inputData)
  }});