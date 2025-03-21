let data;
console.log(data);
console.log(typeof(data));
console.log("\n ------------------------------");
const array = [];
console.log(typeof(array));
console.log("\n ------------------------------");
const num = [1,2,3,4,5];
console.log(typeof(num));
console.log("\n ------------------------------");
const data1 = ["datta","mahangare"];
console.log(typeof(data1));
console.log("\n ------------------------------");
const mixArray = [1,2,3,"Ganesh","Datta",7];
console.log(mixArray);
console.log(typeof(mixArray));
console.log("\n ------------------------------");

const newSet = new Set();
newSet.add(10);
newSet.add(20);
newSet.add(30);
newSet.add(40);
newSet.add(50);
newSet.delete(10);
newSet.add(20);
console.log(newSet);

console.log("\n ------------------------------");

const updateArray = [2,3,4,5,6];
console.log(updateArray);
updateArray[0]=20;
console.log(updateArray);
const res = updateArray.includes(7);
console.log(res);
const res1 = updateArray.indexOf(5);
console.log(res1);
console.log("\n ------------------------------");

const reversArray = [1,2,3,4,5,6,7,8,9,10];
for (let index = reversArray.length-1; index >=0; index--) {
    const element = reversArray[index];
    console.log(element);
       
}
var res3 = reversArray.slice(2);
console.log(res3);
console.log("\n ------------------------------");

const sortArray = [23,3,4,7,1,43,98,44];
const res5 = sortArray.sort();
console.log(res5);

console.log("----------------------------------------------------------");

let professor = {
    name: "James Gosling",
    age: 55,
    city: "Pune",
    gender: "Male",
    department: "Computer Science",
    subject: "Core Java",
    subjectToTeach:["Java","Computer Security"],
    degrees:{
        engineering: 'CSC',
        PHD: 'Adv Computing',
        MBBS: 'medicine and surgery',
    }
    
}
console.log(`===== Accessing Properties of Object ========`);
console.log(professor);

console.log("\n===== Traversing Object Using For In loop =====");
// for (const key in professor) {
//     if (Object.prototype.hasOwnProperty.call(professor, key)) {
//         const element = professor[key];
//         if(typeof element == 'object')
//         {
//             for (const key in element) {
//                     const element1 = element[key];
//                     console.log(`${key} ==> ${element1}`);
//                 }
            
//         }
//         else{
//                 console.log(`${key} ==> ${element}`);
//         }
//     }
    
// }

professor.array = [1,2,3,4,5,6];

for (const key in professor) {
    if (Object.prototype.hasOwnProperty.call(professor, key)) {
        const element = professor[key];
        console.log(`${key} ==> ${element}`);
        
    }
}

console.log("\n------------------------------------------------------");

// class Datta{
//     name;
//     city;
//     constructor(name,city){
//         this.name=name;
//         this.city=city;
//     }
//     display()
//     {
//         console.log(`Name: ${this.name} City: ${this.city}`);
        
//     }
// }
// const obj = new Datta('Rohit','Mumbai');
// obj.display();

console.log("\n------------------------------------------------------");

class Datta{
    name;
    city;
    // constructor()
    // {
    //     console.log("Parameter less constructor");
        
    // }
    constructor(name,city){
        this.name=name;
        this.city=city;
    }
    display(data1)
    {
        console.log(`Name: ${this.name} City: ${this.city}`);
        console.log(data1);
        
    }
}
let obj = new Datta('Rohit','Mumbai');
obj.display("Mahangare");

