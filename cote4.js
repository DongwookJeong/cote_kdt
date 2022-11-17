// ! 화폐 단위 재사용을 위한 객체지향
// ? 각각의 단위 별로 입력할 수 있는 매개변수 설정
function Tool(one00000,five0000,one0000,five000,one000,five00,one00,five0,one0) {
  this.one00000 = one00000;
  this.five0000 = five0000;
  this.one0000 = one0000;
  this.five000 = five000;
  this.one000 = one000;
  this.five00 = five00;
  this.one00 = one00;
  this.five0 = five0;
  this.one0 = one0;
}

// ? 각 화폐 단위에 원화값 곱셉
class ToolBaby {
  constructor(one00000,five0000,one0000,five000,one000,five00,one00,five0,one0) {
    this.one00000 = one00000 * 100000;
    this.five0000 = five0000 * 50000;
    this.one0000 = one0000 * 10000;
    this.five000 = five000 * 5000;
    this.one000 = one000 * 1000;
    this.five00 = five00 * 500;
    this.one00 = one00 * 100;
    this.five0 = five0 * 50;
    this.one0 = one0 * 10;
  }
}

// ? 금고에 저장된 총 금액
const toolBabys = new ToolBaby(3, 2, 4, 0, 0, 2, 5, 8, 10);
const toolBabysSum =toolBabys.one00000 +toolBabys.five0000 +toolBabys.one0000 +toolBabys.five000 +toolBabys.one000 +toolBabys.five00 +toolBabys.one00 +toolBabys.five0 +toolBabys.one0;
console.log(toolBabysSum);

// ? 지불 금액
const payment = new ToolBaby(1, 0, 0, 0, 0, 0, 0, 0, 0);
const paymentSum = payment.one00000 + payment.five0000 + payment.one0000 + payment.five000 + payment.one000 + payment.five00 + payment.one00 + payment.five0 + payment.one0;
console.log(paymentSum);

// ? 상품 금액 총액
const value = new ToolBaby(0, 0, 3, 0, 4, 1, 3, 0, 3);
const valueSum = value.one00000 + value.five0000 + value.one0000 + value.five000 + value.one000 + value.five00 + value.one00 + value.five0 + value.one0;
console.log(valueSum);
console.log(paymentSum - valueSum);

// ? 각각의 단위 별로 음수 발생시 아랫수로 처리하는 방향으로 구상
// console.log(toolBabys.one00000 - value.one00000);
// console.log(toolBabys.five0000 - value.five0000);
// console.log(toolBabys.one0000 - value.one0000);
// console.log(toolBabys.five000 - value.five000);
// console.log(toolBabys.one000 - value.one000);
// console.log(toolBabys.five00 - value.five00);
// console.log(toolBabys.one00 - value.one00);
// console.log(toolBabys.five0 - value.five0);
// console.log(toolBabys.one0 - value.one0);
// console.log(toolBabys.one00000 + toolBabys.five0000 + toolBabys.one0000 + toolBabys.five000 + toolBabys.one000 + toolBabys.five00 + toolBabys.one00 + toolBabys.five0 + toolBabys.one0)

// ? DROP 및 작성했던 코드들입니다.
// let sum = 0
// for (let key in ToolBaby){
//   console.log(key, ToolBaby[key])
// }
// toolBabys.forEach(function(item){
//   sum += item
// });
// console.log(sum)
// for(let i = 0; i <= toolBabys.lenght; i++){
//   if(typeof value === "number" && payment === "number"){
//     toolBabys.
//   }
// }

// function change_money(value, payment) {
//     if (typeof value === "number" && payment === "number") {
//         value = toolBaby

//     return
//   }
// }

// const pocket = {
//   50000: 2,
//   10000 : 5,
//   5000 : 0,
//   1000 : 0,
//   500 : 10,
//   100 : 10,
//   10 : 10
// }
// for(let have in pocket){
//   console.log(have)
// }

// console.log(change_money(34800, 100000));

// class abc {
//   constructor(five0000, one0000, five000, one000, five00, one00, five0, one0){
//     five0000 = one0000*5;
//     one0000 = five000*2;
//     five000 = one000*5;
//     one000 = five00*2;
//     five00 = one00*5;
//     one00 = five0*2;
//     five0 = one0*5
//   }
// }
// const def = new abc(2, 5, 0, 0, 10, 10, 10, 10)
// console.log(def)

// const allHave = function(arr){
//   if(typeof arr === "number"){
//     for(let i = 0; i <= arr.length; i++){
//       have.five0000 * 10000 +
//       have.one0000 * 10000 +
//       have.five000 * 1000 +
//       have.one000 * 1000 +
//       have.five00 * 100 +
//       have.one100 * 100 +
//       have.five0 * 10 +
//       have.one10 * 10;
//     }
//   }
// }
// allHave(have)
// const three = '30000';
// console.log(allHave(tool(2, 5, 0, 0, 10, 10, 10, 10)))
// console.log(three.length)
// const allHave =
//   have.five0000 * 10000 +
//   have.one0000 * 10000 +
//   have.five000 * 1000 +
//   have.one000 * 1000 +
//   have.five00 * 100 +
//   have.one100 * 100 +
//   have.five0 * 10 +
//   have.one10 * 10;
//   console.log(allHave)

// ? decomposition 분해
// function decomposition (value){
// tool.five000 === one000
// }
