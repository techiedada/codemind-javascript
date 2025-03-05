console.log("------------------ Task 1 ----------------");

console.log("Arrow function with no argument and no return values");

let arrowFun = () => {
    console.log("Good Morning, Today is Wednesday");
    
}
arrowFun();

console.log("\n------------------ Task 2 ----------------");
console.log("Arrow function with 3 argument and no return values");

const argArrow = (a,b,c=1) => {
        const result = a*b*c;
        console.log(`Multiplication of given argument ${a},${b},${c} is: ${result}`);
        
}
argArrow(5,5,2);
argArrow(10,4);

console.log("\n------------------ Task 3 ----------------");
console.log("Arrow function with 5 argument and return values");

let paraArrow = (n1,n2,n3,n4,n5) => {

        let ans = n1 + n2 + n3 + n4 + n5;
        return ans;
}
let result1 = paraArrow(100,100,200,349,756);
console.log(`Addition of given argument is: ${result1}`);

let result2 = paraArrow("I am ","learning ","ES6 ","features ","in depth");
// result2.split(" ");
console.log(result2);
console.log("--------------------------------------------------");

