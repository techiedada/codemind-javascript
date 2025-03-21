const arrayNum = [20, 30, 40, 50, 60, 90, 10];

arrayNum.forEach( (element, index, array ) => {
    console.log(element, index, array);
} );

console.log("only elements.....");

arrayNum.forEach( (element ) => {
    console.log(element);
} );



console.log("===== Traversing Set =====");
const mySet = new Set();
mySet.add(10);
mySet.add(20);
mySet.add(90);
mySet.add(40);
mySet.forEach( (element)=>{
    console.log(element);
});

console.log("===== Traversing Map =====");
const mapStudents = new Map();
mapStudents.set(11, "Jenny");
mapStudents.set(22, "Stew");
mapStudents.set(33, "Elon");
mapStudents.set(22, "Bill");
mapStudents.set(55, "Jenny");
mapStudents.set(22, "Avadhut");
mapStudents.forEach((value, key)=>{
    console.log(`${key} ==> ${value}`);  
});