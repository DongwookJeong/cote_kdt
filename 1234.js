const inputData = [6, 2, 9, 3, 4, 0, 8, 5, 7, 1];
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
  let unje
  let ggagee
  for(i=0; i<inputData.length; i++){
    for(unje=inputData.length-1; unje>i; unje--){
      if(inputData[unje]<inputData[unje-1]){
        ggagee = inputData[unje]
        inputData[unje] = inputData[unje-1]
        inputData[unje-1] = ggagee
      }
    }
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