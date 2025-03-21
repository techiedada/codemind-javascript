//Arrow Function - With no args or parms and no return values
let add = () => {
    console.log("Addition");
}
add();

// AF with arguments and no return value
let addition = (p1, p2=0) => {
   console.log(`Addition: ${p1+p2}`);
}
addition(10, 20);
addition(40);

// AF with arguments and return value

let square = (num) => {
   let result = num * num;
   return result;
}
let squareResult = square(5);
console.log(squareResult);

console.log("++++++++ cube of number++++++++");

let cube = (num) => {
    let result = num * num * num;
    return result;
 }
 let cubeResult = cube(5);
 console.log(cubeResult);