let arrayNum = [10, 20, 30, 40, 20, 50];
console.log(arrayNum);
console.log(`Array length : ${arrayNum.length}`);

const elementAtIndex2 = arrayNum[2];
console.log(`Element at index 2: ${elementAtIndex2}`);

arrayNum[4] = 60;  // update element
console.log(`After update`);
console.log(arrayNum);

arrayNum.push(100);
arrayNum.unshift(200);
console.log(arrayNum);

console.log(`pop and shift methods`);

const array = [10, 20, 30, 40, 20, 50];
console.log(array);
array.pop();
array.shift();
console.log(array);

console.log(`====== splice() ===========`);

const arrayOne = [20, 30, 40, 50, 60];
console.log(arrayOne);
const spliceAfter2 = arrayOne.splice(2);
console.log(spliceAfter2);
console.log(arrayOne);

console.log(`====================`);
const arrayTwo = [20, 30, 40, 50, 60, 90, 10];
console.log(arrayTwo);
const deletedElements = arrayTwo.splice(3, 2);
console.log(deletedElements);
console.log(arrayTwo);

console.log(`===== Splice to add elements without deleting any existing elements========`);
const arrayThree = [20, 30, 40, 50, 60, 90, 10];
console.log(arrayThree);
arrayThree.splice(2, 0, 111, 333);
console.log(arrayThree);

console.log(`===== Splice to add elements by deleting any existing elements========`);
const arrayFour = [20, 30, 40, 50, 60, 90, 10];
console.log(arrayFour);
arrayFour.splice(2, 1, 8888, 900);
console.log(arrayFour);

// array traversing
const array1 = [2, 4, 5, 6, 9, 1];
for (let index = 0; index < array.length; index++) {
    const element = array1[index];
    console.log(element);
}


console.log(`======= Sum the array elements ===========`);
let sum = 0;// 11
for (let index = 0; index < array1.length; index++) {
    const element = array1[index];
    sum = sum + element; // 6 + 5
    console.log(element);
}
console.log(` Sum of an array: ${sum}`);

console.log(`======= Even numbers from the array ===========`);
let arrayNum1 = [7, 2, 5, 8, 6, 4, 11];
for (let index = 0; index < arrayNum1.length; index++) {
    const element = arrayNum1[index];
    if (element%2==0) {
        console.log(element);
    }
}
console.log("======== for of loop==========");
let arrays = [7, 2, 5, 8, 6, 4, 11];
for (const element of arrays) {
    console.log(element);
}


console.log(`======== Array reverse traversing=============`);
let arrayNumbers = [7, 2, 5, 8, 6, 4, 11];
for (let index = arrayNumbers.length-1; index >=0; index--) {
    const element = arrayNumbers[index];
    console.log(element);
    
}

console.log("=======join() =======");

const result = arrayNumbers.join(", ");
console.log(result);
