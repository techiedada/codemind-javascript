console.log("====== IMP ====== closure====== cl");

var globalVariable = 100;
function outer(){
    let outerFunVariable = 200;
    // console.log(outerFunVariable);
    let inner = function(){
        console.log(`Inside inner function`); 
        let innerFunVariable = 300;
        console.log(innerFunVariable);
        console.log(outerFunVariable);
        console.log(globalVariable); 
    }
    return inner;
}
var result = outer();
result();


console.log("-----------------------");
let count=0;
function data(){
    count++;
}
 count=1;