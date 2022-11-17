// ? 맛본 코드들입니다.
// function change_money(value){
//   // let result;
//   if(value>=50000 ){
//     result = value/50000
//   }else if(10000>value>=5000){
//     result = value/5000
//     }else if(1000>value>=500){
//       result = value/500
//     }else if(100>value>=50){
//       result = value/50
//     }else{
//       result = value/10
//     }
//     return result
// }

// ! 현재 작성중인 코드입니다.
function change_moneym(value){
  if(value>=50000){
    five0000 = value/50000
    return five0000

  }else if(10000<=value){
    one0000 = value/10000
    return one0000

  }else if(value<10000){
    result = value/5000
  }
  one0000
}
console.log(change_moneym(50070))

// ? drop된 코드들입니다.
// for(let i = 0; i <= 100000; i++){
  //   value%50000
  // }

  // function change_money(value){
  //   if(value>=50000){
  //     result = value/50000
  //     return result
  //   }
  // }
  // function oneHund(value){
  //   if()
  // }