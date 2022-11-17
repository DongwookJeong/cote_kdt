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
console.log(don());

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
console.log(joa());
// console.log()

function minji(snack, milk, time1, time2) {
  let snackpay = snack * time1;
  let milkpay = milk * time2;
  return snackpay + milkpay;
}
console.log(
  minji(
    don().고양이간식.닭고기,
    don().고양이간식.락토프리우유,
    joa().고양이간식.닭고기,
    joa().고양이간식.락토프리우유
  )+"원 놓치지 않을거에요"
);
function ableBalance(balance, pokemon){
return balance-pokemon
}
const balance = 100000;

console.log(balance-minji(don().고양이간식.닭고기,
don().고양이간식.락토프리우유,
joa().고양이간식.닭고기,
joa().고양이간식.락토프리우유))

/*
21,600원이 사용 가능
*/