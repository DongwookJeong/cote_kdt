// ! 분석 코테 2

// ? floor 가장 큰 정수, random 랜덤
function shoot(){
  return Math.floor(Math.random()*2)+1
}
function score_analysis(teamName, playerName, anotherMatch){
  const minam = 3*16
  const remainder = 84-minam
  const twoPoint = remainder/2
  let success = 0
  let score = []
  while(success<twoPoint){
    if(success>twoPoint){
      break
    }
    success=success+shoot()
    score.push(success)
  }
  score.splice(-1, 1, twoPoint)
  let one = 0
  for(let i = 0; i < score.length; i++){
    if(score[i]-score[i-1]===1||undefined){
      one++
    }
  }
  const two = score.length - one
  const successShoot = one + two
  const freeShoot = two + one*2
  const successRate = Math.floor(((one+two)/freeShoot)*100)
  console.log(`'${teamName}'팀이 이 날 성공한 2점슛은 총 '${two}회'입니다.`)
  console.log(`그리고 '${anotherMatch}'팀으로부터 자유투를 '${freeShoot}'번 획득해, 주장 '${playerName}'는 총'${successShoot}'개의 자유투를 성공`)
  console.log(`이날 '${teamName}'팀의 자유투 성공률은 '${successRate}'입니다.`)
}
score_analysis('kdt','공욱재', '피카츄')