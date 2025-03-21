const array = [4, 9, 6, 5, 3, 8, 1];
const sum = array.reduce( (runningTotal, element)=>{
    return runningTotal + element;
}, 0);
console.log(sum);

console.log("multiplication");

const multiplication = array.reduce( (runningTotal, element)=>{
    return runningTotal * element;
}, 1);
console.log(multiplication);



const arrayOne = [4, 9, 6, 5, 3, 8, 1];
// Sum the even numbers
// const evenArray = arrayOne.filter((element)=>{
//     return element%2==0;
// });
// const sumEven = evenArray.reduce( (runningTotal, element)=>{
//     return runningTotal + element;
// }, 0);
// console.log(sumEven);

const sumEven = arrayOne.filter((element)=>{
    return element%2==0;
}).reduce( (runningTotal, element)=>{
    return runningTotal + element;
}, 0);
console.log(sumEven);


const arrayMarks = [45, [90, 60], 70, 40, [ 8,9, [3, 0] ], ,7 ,  ,]
console.log(`Length : ${arrayMarks.length}`);

const flattenArray = arrayMarks.flat(2);
console.log(flattenArray);

const arrayWithEmptySlots = [45, , 70, 40, , ,7 ,  ,]
const res = arrayWithEmptySlots.flat();
console.log(res);