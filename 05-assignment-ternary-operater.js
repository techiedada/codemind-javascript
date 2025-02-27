console.log("----- Task 1 -----");

var greaterNumber = function(num1,num2){
    var result = num1>num2?num1:num2;
    console.log(`The greatest number between ${num1} And ${num2} is: ${result}`);
}
greaterNumber(10,-10);
greaterNumber(800,899);

console.log("----- Task 2 -----");
var isEvenOrOddNum = function(num){
    var result = num%2==0? true : false;
    return result;
}
var returnValue = isEvenOrOddNum(29);
console.log(`The result of Given Number 29 is: ${returnValue}`);
var returnValue = isEvenOrOddNum(44);
console.log(`The result of Given Number 44 is: ${returnValue}`);
var returnValue = isEvenOrOddNum(101);
console.log(`The result of Given Number 101 is: ${returnValue}`);
var returnValue = isEvenOrOddNum(0);
console.log(`The result of Given Number 0 is: ${returnValue}`);

console.log("----- Task 3 -----");
var wordLength = function(str){
    var result = str.length%2 == 0? "EVEN" :"ODD";
    return result;
}
var returnResult = wordLength("JavaScript");
console.log(`The length of "JavaScript" is:${returnResult}`);
var returnResult = wordLength("Developer");
console.log(`The length of "Developer" is:${returnResult}`);
var returnResult = wordLength("Google");
console.log(`The length of "Google" is:${returnResult}`);