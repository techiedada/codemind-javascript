function strReverse(){
   
    var result = '';
    let str = "hello";
    console.log(`Given string is : ${str}`);
    for (let index = str.length-1; index >= 0; index--) 
        {
            const element = str[index];
            result = result + element;
        }console.log("Revers of a given string is: "+result);
        
}
strReverse();