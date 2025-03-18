console.log("_______________________________________________________________");
const array = [3,9,7,6,19,29,53];
console.log("Given array is: "+array);
let count = 0;
let newArray = [];
function isCountPrime(element){
    
        for(let i=2;i<element;i++)
        {
            if(element % i == 0)
            {
                // console.log(`${element} is not prime`);
                return false;
            }
           
        }
        return true;
}

for (const element of array) 
{
    if(isCountPrime(element))
    {
        newArray.push(element);
        count++;
    }
}
console.log("PrimeNumbers are : "+newArray);
console.log("Total primeNumbers of Array is : "+count);
console.log("_______________________________________________________________");


function spaceCount(str)
{
    console.log(`Given string is: '${str}'`);
        
    let newStr = str.split(" ").length-1;
    console.log("Total spaces of string is : "+newStr);
}
console.log(" ");
spaceCount("Revision is the mother of success");
spaceCount("JavaScript is the language of internet world");
console.log("_______________________________________________________________");
