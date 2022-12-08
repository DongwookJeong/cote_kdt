// let kakao = 0
// let encina = 0
// let chicken = 0

function x(err) {
  let arr = [
    [1500, 19],
    [4500, 6],
    [400, 30],
  ];
  // let kakao = arr[0][0]*arr[0][1]
  //for (let i = 0; i < 3; i++) {
  //  for (let j = 0; j < 2; j++) {
  //    if (arr[i].length === 3 && arr[j].length === 2) {
  //    }
  //    }
  //  }
  kakao = arr[0][0] * arr[0][1];
  console.log(`자전거 타면 ${kakao}`);
  encina = arr[1][0] * arr[1][1];
  console.log(`커피없으면 못살아 ${encina}`);
  chicken = arr[2][0] * arr[2][1];
  console.log(`꼬꼬댁 ${chicken}`);
  return kakao + encina + chicken;
}
console.log(x());
/*
const lineOne = {
  kakao : {
    pay: 1500,
    count: 19
  },
  encina : {
    pay: 4500,
    count: 6
  },
  chicken : {
    pay: 400,
    count: 30
  }
}

const lineOne = {
  kakao {1500, 19},

}

function oneLine(){
  for(i = 0; i<3; i++){
    for(j = 0; j<2; j++){
      function score ([i], [j]){
        let kakao = [1500][19]
        let encina = [4500][6]
        let chicken = [400][30] 
        console.log(kakao)
        return kakao
      }
    }
  }
}
*/
