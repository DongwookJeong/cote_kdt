/*
조건 1: 고정 지출 항목, 내역 정보의 자료구조 및 데이터타입, 값은 외부에서 전달받은 "형식"이므로 변형 할 수 없습니다.
조건 2: 중요도 부분에서 3번 항목인 "고양이간식"은 완결한 고정지출 이므로 절약할 수 없습니다.
조건 3: 함수의 인자(입력) 데이터타입은 객체입니다.
조건 3: 리턴(출력)은 하나의 문장, 문자열(string)로 항목별 절약횟수가 도출되어야 합니다.
조건 4: 고정지출의 종류와 갯수, 총 예산과 목표가격(게임)이 변할수도 있습니다.
조건 6: 일찍 일어나면 30분당 1만큼 피로도가 증가합니다. 원장님 카드를 1회 훔쳐 사용하면 미움지수가 1만큼 증가합니다.
*/
/*
? 의사코드
예산
100,000원

포켓몬 
64,800원

절약 
출퇴근은 절약가능, 커피도 절약가능, 고양이는 참지 않지

특이사항
고양이 간식은 감축 불가
커피는 비용감축은 가능하나 횟수는 챙겨야 함
사실 카드를 훔쳐서 포켓몬을 사는게 이득

1. 절대 지불 금액 확인
2. 우선 포기 금액 설정
3. 횟수 피로도, 미움 (미움과 커피복용횟수)
*/
const balance = 100000;
const pokemon = 64800;

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
  // for(let [key,value]of Object.entries(fixed)){
  //   // console.log(key)
  //   // console.log(inkey)
  //   // console.log(value)
  //   // console.log(key,"고양이간식")
  // }
  // for(let [key,value]of Object.entries(count)){
  //   // console.log(key)
  //   // console.log(value)
  // }
  console.log(fixed["고양이간식"]["닭고기"])
  return fixed["고양이간식"]["닭고기"]*count["고양이간식"]["닭고기"]+fixed["고양이간식"]["락토프리우유"]*count["고양이간식"]["락토프리우유"]
}
console.log(don())

//? 전역으로 확인 콘솔
// function yamyam(fix, time) {
//   return fix * time;
// }
// console.log(yamyam(count.고양이간식.닭고기, fixed.고양이간식.닭고기));
// console.log(
//   yamyam(count.고양이간식.락토프리우유, fixed.고양이간식.락토프리우유)
// );
// let yam = count.고양이간식.닭고기*fixed.고양이간식.닭고기
// console.log(yam)//12,000
