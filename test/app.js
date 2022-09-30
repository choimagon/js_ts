//------------------------------------
console.log("---------------------------");
const dw = [1,2,3,4,5];
console.log(dw);
console.log(dw[0]);
console.log(dw.length);
dw.push(6);
console.log(dw);

//const player = ["magon", 22, false,"bigger"];
const player = { //object?
    name : "magon",
    points : 10,
    fat : true,
};
console.log(player.name);
console.log(player.points);
console.log(player.fat);
console.log(player);
player.fat = false; // player 자체는 불변이지만 안에 것들은 가변이다
player.lastname = "choi"; //안에 없는것을 추가 할수 있다. 
console.log(player);