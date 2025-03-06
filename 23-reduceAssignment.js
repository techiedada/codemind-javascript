console.log("------- Using reduce() --------");

console.log("Given array is: ");
const arrayNumber = [20,11,40,25,37,49,9,90,60,2,19];
console.log(arrayNumber);
console.log("---------- Task 1 -----------");
let ans = arrayNumber.reduce((runningTotal,element)=>{
        return runningTotal+element;
},0);
console.log(`Sum of given array is: ${ans}`);

console.log("Using traditional way :");
let sum=0;
for(let i=0;i<arrayNumber.length;i++)
{
    sum = sum + arrayNumber[i];
}
console.log("Sum of given array is: "+sum);

console.log("---------- Task 2 -----------");
const result = arrayNumber.filter((element)=>{
    return element % 5 == 0;
    
}).reduce((runningTotal,element)=>{
    return runningTotal+element;
},0);

console.log("Sum of all elements divided by 5: "+result);
console.log("--------------------------------------------------------");
