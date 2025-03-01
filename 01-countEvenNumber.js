console.log("\n--------------------------------------------------------------------");


let array = [10,20,45,30,77,60];
console.log(array);
var count=0;
for (let index = 0; index < array.length ; index++) 
{
    if (array[index]%2 == 0) 
        {
            
            console.log(array[index]);
            count++;
        }
}
        
console.log("Total count of even number is: "+count);

console.log("\n--------------------------------------------------------------------");


