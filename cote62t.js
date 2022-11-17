// let count = 0
// let ableBalance = 21600
// let ncina = 4500
// let canu = 200
// let pokemon = 64800;

// function cof(time1, time2){

// }
// 커피 복용 횟수 엔시나 6회, 카누 15회 도합 21회
// 도보를 한다는 가정

// console.log(21600/4500)
// console.log(ableBalance/(canu*15))

function don() {
  const fixed = {
    출퇴근비용: {
      카카오톡자전거: 1500,
      택시: 3500,
    },
    커피: {
      엔시나: 4500,
      카누: 200,
    },
    고양이간식: {
      닭고기: 400,
      락토프리우유: 800,
    },
  };
  for (let [key, category] of Object.entries(fixed)) {
    // console.log(key)
    // console.log(category)
    // console.log(number)
  }
  return fixed;
}
// console.log(don());

function joa() {
  const count = {
    출퇴근비용: {
      카카오톡자전거: 19,
      택시: 3,
    },
    커피: {
      엔시나: 6,
      카누: 15,
    },
    고양이간식: {
      닭고기: 30,
      락토프리우유: 2,
    },
  };
  for (let [key, category] of Object.entries(count)) {
    // console.log(key)
    // console.log(value['닭고기'])
    // undefined
    // undefined
    // 30
    count[(key, category)];
  }
  return count;
}
// console.log(joa());
const balance = 100000;

function minji(snack, milk, time1, time2) {
  const getData = {
    snackpay: snack * time1,
    milkpay: milk * time2,
  };

  const plusValue = getData.snackpay + getData.milkpay;
  return plusValue;
}
let cof = minji(
  don().커피.엔시나,
  don().커피.카누,
  joa().커피.엔시나,
  joa().커피.카누
);
let cat = minji(
  don().고양이간식.닭고기,
  don().고양이간식.락토프리우유,
  joa().고양이간식.닭고기,
  joa().고양이간식.락토프리우유
);
let move = minji(
  don().출퇴근비용.카카오톡자전거,
  don().출퇴근비용.택시,
  joa().출퇴근비용.카카오톡자전거,
  joa().출퇴근비용.택시
);
console.log(cat+cof+move);
console.log(cof);
console.log(move);
// console.log(cof)
