console.log("---------- Task 1 ------------");

const arrayNumber = [1,-7,40,502,-77,91,0,108,89,-601];

console.log("Log the array element with its index using forEach() with arrow function");
console.log("Given array is: "+arrayNumber);

arrayNumber.forEach((Element,index) => {
    console.log(`${index} => ${Element}`);
    
});

console.log("\n---------- Task 2 ------------");
console.log("Given array is: "+arrayNumber);
console.log("Positive number of given array is:");
arrayNumber.forEach((element) => {

    if(element > 0)
        {
            
            console.log(element);
            
        }
});

console.log("\n---------- Task 3 ------------");
console.log("Given array is: "+arrayNumber);
console.log("Negative numbers of given array is:");
let emptyArray = [];
arrayNumber.forEach((element) => {

    if(element < 0)
        {
            emptyArray.push(element);
           
            
        }
});
console.log(emptyArray);

console.log("\n---------- Task 4 ------------");

console.log("Given array is: "+arrayNumber);
console.log("Even number of given array is:");
arrayNumber.forEach((element) => {

    if(element % 2 == 0)
        {
            
            console.log(element);
            
        }
});

console.log("\n---------- Task 5 ------------");

console.log("Given array is: "+arrayNumber);
let sum=0;
arrayNumber.forEach((element) => {

    sum = sum + element;
  
});
console.log("Sum of given array is:"+sum);

console.log("\n---------- Task 6 ------------");
console.log("Given array is: "+arrayNumber);
console.log("log even index array value");
arrayNumber.forEach((element,index) => {
    if(index % 2 == 0)
    {
        console.log(`${index} => ${element}`);
        
        
    }
})

console.log("---------------------------------------");
