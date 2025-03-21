// Type: Function with no argument or parameter and no return value
function test(){
    console.log("Test");  
}

test(); // Invocation or function call

// Type 2: Function with argument or parameter and no return value
function square(num){
    console.log(`Finding the square: ${num}`);
    var result = num * num;
    console.log(`Square is: ${result}`);   
}
square(8);
square(19);

// Type 3: Function with argument or parameter and return value
function addition(n1, n2, n3, n4){
    console.log(`Numbers to add: ${n1}, ${n2}, ${n3}, ${n4}`);
    var result = n1+n2+n3+n4;
    return result;
}
var returnValue = addition(5, 7, 8, 9);
console.log(`Addition is: ${returnValue}`);

var returnValue = addition(33.78, 89.90, 1879, 7896);
console.log(`Addition is: ${returnValue}`);

function fullName(firstName, middleName, lastName){
    console.log(`Full name is: `);
    var result = firstName + middleName + lastName;
    console.log(result); 
}
fullName("Gajanan ", "Prabhakar ", "Kharat");

