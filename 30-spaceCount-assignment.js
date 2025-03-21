function spaceCount(str)
{

    console.log(`Given string is: '${str}'`);
        
    let newStr = str.split(" ").length-1;
    console.log("Total spaces of string is : "+newStr);
    // let newStrLength = newStr.length;
    // console.log(newStrLength);
    // let totalSpaces = str.length - newStrLength;
    // console.log("Total spaces from string is:"+totalSpaces);
}
console.log("_______________________________________________________________");
spaceCount("Revision is the mother of success");
console.log("_______________________________________________________________");
spaceCount("JavaScript is the language of internet world");
console.log("_______________________________________________________________");



const data = "My name is Dattatray";
const res = data.length;
console.log(res);

const newData = data.split(" ").length;
console.log(`Total words are : ${newData}`);
