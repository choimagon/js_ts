//------------------------------------
function sayHello(name, age){
    console.log("My name is "+name+" and I'm " + age);
}
sayHello("magon", 22);
function plus(a, b){
    console.log("plus : " + (a+b));
}
plus(10, 20);
const player = {
    n : "dragon",
    f : function(){
        console.log("name : " +this.n); //this는 자바나 자바스크립트나 똑같은거 같다.
    },
};
player.f();