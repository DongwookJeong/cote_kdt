/*
? 1
function leather(count, hour){
  return count * hour
}
console.log(leather(45, 8))

function game_money(leather){
  const changeMoney = {gold:true, sliver:false, copper:true}
  for(let key in changeMoney){
    if(key.value === true){
      const changeSilver = leather;
      const changeGold = parseInt(leather/2)
      const chanCopper = (leather%2)*16
    }
  }
  console.log(`gold:${changeGold}개, copper:${changeCopper}개 획득하였습니다.`)
}
game_money(leather(45,8))
?2
let set = {
  gold: true,
  silver: false,
  copper: true
}
function game_money(){
  let time = 8
  let leather = 45
  let silver = leather*2
  let gold = silver*4
  let copper = silver*8
  
  if(set.gold){
    gold = Math.floor(copper/32)
    copper = copper-gold*32
    console.log(gold)
    console.log(copper)
  }
  console.log(`골드 갯수는 ${gold}`)
  console.log(`copper갯수 ${copper}`)
}
*/
const game_money = (item, hour)=>{
  const gold = Math.floor(item/2)
  const copper = (item%2)*16
  console.log(copper)
  console.log(`${gold}개`)
  console.log(`${copper}개`)
  const totalItem = item*hour
  const totalGold = (totalItem/2)
  const totalcopper = (totalItem%2)*16
  console.log(`${totalGold}, ${totalcopper}`)
}
game_money(45,8)