
var x=10;
console.log(x);
{
    var x=2;
    console.log(x);
    
}
console.log(`\n ${x}`);

let y=10;
console.log(y);
{
    let y=2;
    console.log(y);
    
}
console.log(`\n ${y}`);


console.log("****************************************************");

{
    var z=23;
    console.log("Lokal value of z : "+z);
}
console.log("value of z : "+z);

console.log("****************************************************");

function data()
{
    var a=1;
    console.log(`Value of a inside the block is: ${a}`);
    
}
data();
//console.log(`Value of a outside the block is: ${a}`);

console.log("****************************************************");
var num=100;
function varData() 
{
    var num=20;
        if (true) 
        {   var num=20;
            var num=10;
            console.log("value of num inside if() is : "+num);
        }    
        console.log("value of num outside if() is : "+num);    
}
varData();
console.log("value of num outside if() is : "+num);










console.log("****************************************************");
function letData() 
{
    let num=20;
        if (true) 
        {  // let num=20;
            let num=10;
            console.log("value of num inside if() is : "+num);
        }    
        console.log("value of num outside if() is : "+num);    
}
letData();