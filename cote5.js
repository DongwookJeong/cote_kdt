/*
!조건 1: sort(), sorted() 메서드를 사용하지 않고 문제를 해결합니다.
!조건 2: 주어진 무작위 배열이 아닌, 다른 무작위 형태의 배열이어도 동작하여야 합니다.
!조건 3: sortArray() 함수는 인자로 '배열'을 받습니다.
!조건 4: sortArray() 함수의 리턴 타입은 객체입니다.
!조건 5: 출력 객체는 정렬이 완료된 데이터의 index 0번째가 된 순서는 "one" 키의 값으로, index 1번째는 "two" 키의 값으로 배치되어 4번째 인덱스까지 객체에 담겨 출력되어야 합니다.
!조건 6: step값이 몇인지(실행이 몇번 진행되었는지), 콘솔에 기록되어야 합니다.
*/

/*
?의사코드
* 구상 순서
* 뺄셈? 나누기? 인덱스 하나를 다른 인덱스들과 비교
* 만일 해당 배열처럼 인덱스 첫번째의 6을 다른 인덱스 비교를 for문 혹은 forEach로 돌린다.?
*/
const inputData = [6, 2, 9, 8, 4, 0, 8, 5, 7, 1]
const step = 0

class range{
  constructor(zero, one, two, three, four){
    this.zero = zero
    this.one = one
    this.two = two
    this.three = three
    this.four = four
  }
}
function sortArray(array){
  let exArray = []
  
  function filter(){
    for(let index in inputData){
      if(index[0]<=index[1]){
      }
    }
    return 
  }
  array.forEach((index)=>{
    exArray.push(new range(filter(index[0]), filter(index[1]), filter(index[2]), filter(index[3]), filter(index[5])))
  })
}

sortArray(inputData)
// 확인
console.log(inputData.length)
console.log(inputData) //[]

// ! 잠시 대기
// for(let i = 0; arr.length <= 5; i++){
  // i === i/1 ? 
// }
// ? forEach 처리 작성 시도 
// function sortArray(arr){
//   inputData.forEach(function(index){
//     if(index[0]){

//     }
//   })
//   return 
// }
// ? key 처리 작성 시도
// function range()
//   {
//     one = index[0],
//     two = index(1),
//     three = index(2),
//     four = index(3),
//     five = index(4)
//   }
  // console.log(range(sortArray(6, 2, 9, 8, 4, 0, 8, 5, 7, 1)))