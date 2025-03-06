console.log("Given array is: ");

const arrayNumber = [20,11,40,25,23,11,9,31,60,2,19];
console.log(arrayNumber);
console.log("---------- Task 1 -----------");

console.log("Add 10 into each element");
const res = arrayNumber.map((element)=> {
    return element + 10;
});
console.log(res);

console.log("\n---------- Task 2 -----------");
console.log("Cube the each array element");
const cubeRes = arrayNumber.map((element)=>{
    return element * element * element;
});
console.log(cubeRes);

console.log("\n---------- Task 3 -----------");
console.log("Add the index value into corresponding each array element");
const indArray = arrayNumber.map((element,index)=>{
        return element+index;
});
console.log(indArray);

console.log("-----------------------------------------------------------");