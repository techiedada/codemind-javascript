// callback function.

function show()
{
    console.log(" I am learning HTML and CSS");
    
}
function javaScript(showFun)
{
    console.log("Now I am learning JavaScript");
    showFun();
    
}
javaScript(show);

console.log("====== function expression =======");

let funEx = function(num){
let res = num*num
return res;

}
let ans = funEx(5);
console.log("Square of given number is:"+ans);

console.log("====== function can return another function =======");

function sum()
{
    console.log("Hello");
    return function(){
        console.log("return function");
        
    }
    
}
sum()();


console.log("---- higher order function -------");

function accept(callback){
console.log("main function");
callback();
return function high(){
    console.log("higher order function");
    
}

}
function show1(){
    console.log("parameter function");
    
}
let data = accept(show1);
data();

console.log("------------------------ call() --------------------------------------");

let emp = {
    name : 'Elon',
    city : 'Pune',
    pin : '412301'
}

function main(message)
{
    console.log(`${message} welcome ${this.name}`);
    
}
main.call(emp,"hello");

console.log("--------------------------- apply() -----------------------------------");

let emp1 = {
    name : 'Elon',
    city : 'Pune',
    pin : '412301'
}

function main1(message,data)
{
    console.log(`${message} ${data} welcome ${this.name}`);
    
}
main1.apply(emp1,['hello', 'dear']);

console.log("--------------------------- apply() -----------------------------------");

let global = "I am global var";

function data5(){
    let global = "I am local var";
    console.log(global);
}
data5();
console.log(global);
