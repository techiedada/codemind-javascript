console.log("Given array is: ");

const arrayNumber = [20,11,40,25,37,49,9,90,60,2,19];
console.log(arrayNumber);
console.log("---------- Task 1 -----------");
console.log("find all numbers which are greaten than 50 :");
arrayNumber.filter((element)=>{
        if(element > 50)
        console.log(element);
        
});

console.log("---------- Task 2 -----------");
console.log("find out all the even number ");
console.log("even numbers of given array is: ");

arrayNumber.filter((element)=>{
    if(element % 2 == 0)
        console.log(element);
        
});

console.log("---------- Task 3 -----------");
console.log("find out all the odd number ");
console.log("odd numbers of given array is: ");
arrayNumber.filter((element)=>{
    if(element % 2 == 1)
        console.log(element);
        
});

console.log("---------- Task 4 -----------");
console.log("find out all numbers which are divided by 5 ");
arrayNumber.filter((element)=>{
    if(element % 5 == 0)
        console.log(element);
        
});

console.log("---------- Task 5 -----------");
console.log("Numbers between 20 and 50 is:");
arrayNumber.filter((element)=>{
        if(element>20 && element<50)
            console.log(element);
            
});

console.log("---------------------------------------------------");

