const fs = require("fs");
const way = `C:/Users/Administrator/Desktop/nother/coding-exam-11`;

const head = fs.readFileSync(way + "/head.txt", "utf8")

const header = fs.readFileSync(way + "/header.txt", "utf8");
const main = fs.readFileSync(way + "/main.txt", "utf8");
const footer = fs.readFileSync(way + "/footer.txt", "utf8");
const body = () => {
  return `<body>
    <header>${header}</header>
    <main>${main}</main>
    ${footer}
</body>`;
};
console.log(body());
fs.writeFile(way + "/body.txt", `${body()}`, function (err) {
  if (err === null) {
    console.log("들어갔다.");
  } else {
    console.log("안들어갔다.");
  }
});

// console.log(body)//[Function: body]
// console.log(header);
// console.log(main);
// console.log(footer);
// function body(){
//   header + main + footer
//   return
// }
// console.log(body())//undefined

/*
! 동기 컷
const inputHeader = fs.writeFileSync(way + "/body.txt", `${header}`);
console.log(inputHeader);
const inputMain = fs.writeFileSync(way + "/body.txt", `${main}`);
console.log(inputMain);
const inputFooter = fs.writeFileSync(way + "/body.txt", `${footer}`);
console.log(inputFooter);
*/

/*
! 비동기 컷
fs.readFile('C:/Users/Administrator/Desktop/nother/coding-exam-11/header.txt','utf8',(err, data)=>{
  if(err){
    console.error(err)
    return
  }
  console.log(data)
})
fs.readFile('C:/Users/Administrator/Desktop/nother/coding-exam-11/main.txt','utf8',(err, data)=>{
  if(err){
    console.error(err)
    return
  }
  console.log(data)
})
fs.readFile('C:/Users/Administrator/Desktop/nother/coding-exam-11/footer.txt','utf8',(err, data)=>{
  if(err){
    console.error(err)
    return
  }
  console.log(data)
})
*/

/*
! 기억 저편 어딘가
import header from "./header.txt"
import main from "./main.txt"
import footer from "./footer.txt"

*/
