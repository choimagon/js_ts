let a = 5;
const b = 3;
//var 이라는것이 있음 요즘은 보통 let const 사용 
//var 은 아무규칙없이 수정 가능

console.log("sum : " + (a+b));
a = 10;
console.log("new sum : " + (a+b));
//------------------------------------
console.log("---------------------------");
const tf = false; //null은 아무것도 없다라는 뜻임
console.log(tf);
let something; //정의 되지않음 null과는 다름 null은 인위적으로 없는거임
console.log(something);
//------------------------------------
console.log("---------------------------");
const dw = [1,2,3,4,5];
console.log(dw);
console.log(dw[0]);
console.log(dw.length);
