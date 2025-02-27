console.log("--------- Task 1 ----------");
const fruits_seasonal = ["Banana","Orange","Apple","Mango","Water Melon"];
console.log(`Given array is: ${fruits_seasonal}`);
const firstElement = fruits_seasonal[0];
console.log(`First element of an Array is: ${firstElement}`);
const lastElement = fruits_seasonal[fruits_seasonal.length-1];
console.log(`Last element of an Array is: ${lastElement}`);

console.log("--------- Task 2 ----------");
console.log(`Given array is: ${fruits_seasonal}`);
fruits_seasonal.unshift("Papaya");
console.log(`After Adding element in first position the array is: ${fruits_seasonal}`);

console.log("--------- Task 3 ----------");
console.log(`Given array is: ${fruits_seasonal}`);
const removeElement = fruits_seasonal.splice(4,1);
console.log(`This is Remove element from an Array : ${removeElement}`);
console.log(`After remove ${removeElement} The array is: ${fruits_seasonal}`);

console.log("--------- Task 4 ----------");
console.log(`Given array is: ${fruits_seasonal}`);
fruits_seasonal.push("Pineapple");
console.log(`After adding element in last position The array is: ${fruits_seasonal}`);

console.log("--------- Task 5 ----------");
console.log(`Given array is: ${fruits_seasonal}`);
fruits_seasonal.splice(4,0,"Dragon Fruit");
console.log(`After insert element The array is: ${fruits_seasonal}`);

console.log("--------- Task 6 ----------");
console.log(`Given array is: ${fruits_seasonal}`);
fruits_seasonal.splice(2,1,"Kiwi");
console.log(`After replace element "Orange" with "Kiwi" The array is: ${fruits_seasonal}`);

console.log("--------- Task 7 ----------");
console.log(`Given array is: ${fruits_seasonal}`);
const sliceElement = fruits_seasonal.slice(1,4);
console.log(`After using "slice(1,4)" the array is: ${sliceElement}`);

console.log("--------- Task 8 ----------");
console.log(`Given array is: ${fruits_seasonal}`);
const lastThree = fruits_seasonal.slice(fruits_seasonal.length-3,fruits_seasonal.length);
console.log(`Last Three elements of an Array is: ${lastThree}`);
console.log("---------------------------------------------------------------------------");

