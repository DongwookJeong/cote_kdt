const inputData = [6, 2, 9, 8, 4, 0, 8, 5, 7, 1];
/*
* 자 비교를 해야되 for문이야
* inputData[0]이 1~9까지 대조를 해야되
* 다음 inputData[1]가 0(1제외)~9까지 
* [0] 클때 어떻게 처리 할 것인가???
* 새로운 배열을 뱉어야 되는 것인가?
*/
function ah(inputData) {
  for (let key in inputData) {
    inputData[key];
  }
  for(let i = 0; i < inputData.length; i++){
    if(inputData[0]>inputData[1]){
      console.log("up")
    }else if(inputData[0]===inputData[1]){
      console.log("same")
    }
    else{
      inputData[0]=inputData[0]
      console.log("down")
    }
    console.log("------------01--------------")
    if(inputData[1]>inputData[2]){
      console.log("up")
    }else if(inputData[0]===inputData[2]){
      console.log("same")
    }else{
      console.log("down")
    }
    console.log("------------02--------------")

    if(inputData[0]>inputData[3]){
      console.log("up")
    }else if(inputData[0]===inputData[3]){
      console.log("same")
    }else{
      console.log("down")
    }
    console.log("------------03--------------")
    if(inputData[0]>inputData[4]){
      console.log("up")
    }else if(inputData[0]===inputData[4]){
      console.log("same")
    }else{
      console.log("down")
    }
    console.log("------------04--------------")
    if(inputData[0]>inputData[5]){
      console.log("up")
    }else if(inputData[0]===inputData[5]){
      console.log("same")
    }else{
      console.log("down")
    }
    console.log("-------------05-------------")
    if(inputData[0]>inputData[6]){
      console.log("up")
    }else if(inputData[0]===inputData[6]){
      console.log("same")
    }else{
      console.log("down")
    }
    console.log("-------------06-------------")
    if(inputData[0]>inputData[7]){
      console.log("up")
    }else if(inputData[0]===inputData[7]){
      console.log("same")
    }else{
      console.log("down")
    }
    console.log("-------------07-------------")
    if(inputData[0]>inputData[8]){
      console.log("up")
    }else if(inputData[0]===inputData[8]){
      console.log("same")
    }else{
      console.log("down")
    }
    console.log("--------------08------------")
    if(inputData[0]>inputData[9]){
      console.log("up")
    }else if(inputData[0]===inputData[9]){
      console.log("same")
    }else{
      console.log("down")
    }
    console.log("---------------09-----------")
  }
  return { 
    one: inputData[0], 
    two: inputData[1], 
    three: inputData[2], 
    four: inputData[3], 
    five: inputData[4] 
  };
}
console.log(ah(inputData));