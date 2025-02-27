console.log(`----- Result of Program 1 -----\n`);

function squareOfWorldLength(str){
    console.log(`Given String is ${str}`);
    var wordLength = str.length;
    console.log(`Length of a Given String is: ${wordLength}`);
    return wordLength*wordLength;    
}
var result = squareOfWorldLength("JavaScript");
console.log(`The Length square is: ${result} \n`);

function squareOfWorldLength(str){
    console.log(`Given String is ${str}`);
    var wordLength = str.length;
    console.log(`Length of a Given String is: ${wordLength}`);
    return wordLength*wordLength;    
}
var result = squareOfWorldLength("Google Chrome");
console.log(`The Length square is: ${result} \n`);

function squareOfWorldLength(str){
    console.log(`Given String is ${str}`);
    var wordLength = str.length;
    console.log(`Length of a Given String is: ${wordLength}`);
    return wordLength*wordLength;    
}
var result = squareOfWorldLength("Web Developer Smart");
console.log(`The Length square is: ${result} \n`);

console.log(`----- Result of Program 2 ----- \n`);

function totalWordsCount(){
    var wordStr = "I am UI Developer";
    console.log(`Given string is: ${wordStr}`);
    var strLength = wordStr.length;
    var wordSplit = wordStr.split(" ");
    var wordsCount = wordSplit.length;
    console.log(`The Length of String is:${strLength} And after split count of words is: ${wordsCount}`);
    var result = strLength / wordsCount;
    console.log(`The division of stringLength and wordsCount is:${result}`);
    var multi = strLength * wordsCount;
    console.log(`The multiplication of stringLength and wordsCount is:${multi}`);
    
    
}
totalWordsCount();
