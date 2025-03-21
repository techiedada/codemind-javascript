

console.log("-------------- Armstrong number----------------");

// let string = "hello";
let array = [2,3,4,5];
let newArray = [];
for(let i=array.length-1;i>=0;i--)
{
     let element = array[i];
     newArray.push(element);
}
console.log(newArray);

console.log("------------ Reverse String --------------");

const str = "Hello";
let res="";
for(let i=str.length-1;i>=0;i--)
{
    let ans = str[i];
    // console.log(ans);
    res=res+ans;
}
console.log(res);

console.log("------------ Even number from array using for of loop --------------");

let array1 = [2,3,5,7,9,45,32,66];
console.log(`Given array is : ${array1}`);
let evenArray = [];
let oddArray = [];
let ans;
for (const element of array1) 
{
    // console.log(element);
    if(element % 2 == 0)
    {
        // console.log(element);
        evenArray.push(element);
    }
    else{
            oddArray.push(element);
        }
}
console.log("even element from array:"+evenArray);
console.log("odd element from array:"+oddArray);

console.log("------------------------------------------------------");

let array2 = [1,3,4,6,23,456,786,0,11];
console.log("Given array is:"+array2);
console.log("odd numbers bellow => ");

for (const key in array2) {
    if (Object.prototype.hasOwnProperty.call(array2, key)) {
        const element = array2[key];
        // console.log(element);
        
    if(element % 2 == 1)
        console.log(element);
    }
}

console.log("------------------------------------------------------");
console.log("----- using join() -----");

let array3 = ["apple","banana","orange","water melon"];
let array4 = ["Tomato","onion","bringer"];
console.log("Given array is: "+array3);
console.log("Given array is: "+array4);
let ans3 = array3.concat(array4);
console.log(ans3);



console.log("------------------------------------------------------");

let str1 = "Dattatray ";
let str2 = "Mahangare";

let ans1 = str1.concat(str2);
console.log(ans1);

console.log("----------------- Merge array Using spread operator ---------------------");

let array5 = ["apple","banana","orange","water melon"];
let array6 = ["Tomato","onion","bringer"];

let mergeArray = [...array5, ...array6];
console.log(mergeArray);
console.log(...mergeArray);
console.log(typeof mergeArray);

console.log("--------------------------------------");
let dup = [5, 6, 7, 34, 23, 6, 7, 89];

let dupliArray = [...new Set(dup)];
console.log(dupliArray);

console.log("--------------------------------------");
 let primeArray = [10,2,34,56,78,345,654,567,1.5];
console.log(primeArray);
let min = primeArray[0];
for(let i=0;i<primeArray.length;i++)
{
    if(primeArray[i]<min)
        min=primeArray[i];
}
console.log("minimum element from array is : "+min);


console.log("\n--------------------------------------");

let name = "Mahangare";
console.log("Given string is : "+name);

let ans5 = "";
for (let index = name.length-1; index>=0; index--) {
    let element = name[index];
    // console.log(element);
    ans5=ans5+element;
}
console.log("Reverse of given string is: "+ans5);


console.log("\n--------------------------------------");

let employee = {
    name : "Datta",
    city : "Pune",
    pin : 412301,
    education : {
        branch : "CS",
        college : "Waghire",
        degree : "MCS",
        year : 2018,
    },
    percentage : [74.92,59,66.33,75,[54,57,[99,98]]],
}

for (const key in employee) {
    if (Object.prototype.hasOwnProperty.call(employee, key)) {
        const element = employee[key];
     console.log(`${key} ===> ${element}`);
        // console.log(element);
            
    }
}
console.log("\n--------------------------------------");

let employee1 = {
    name : "Datta",
    city : "Pune",
    pin : 412301,
    education : {
        branch : "CS",
        college : "Waghire",
        degree : "MCS",
        year : 2018,
    },
    percentage : [74.92,59,66.33,75,[54,57,[99,98]]],
}

let employee2 = {...employee1};
console.log(employee2);
console.log(employee1);
employee2.city="Mumbai";
console.log(employee1);
console.log(employee2);

console.log("\n--------------------------------------");

let laptop = {
    name: "hp",
    ram: "8 GB",
    processor: "core i7",
    hd: "500 GB"
}

console.log(laptop);
let assRes= Object.assign({}, laptop);
console.log(assRes);
assRes.name="Dell";
console.log(assRes);
console.log(laptop);

console.log("\n--------------------------------------");

class Datta {
    constructor(num) {
        console.log(num);
        
    }
    display(r)
    {
        console.log("body of display"+r);
        
    }
}
let n = new Datta(50);
n.display(23);

console.log("\n--------------------------------------");

let a = [1,2,3,4,5];
let b = [6,7,8,9];

let merge = a.concat(b); // using concat merge two array // join() is not used for merge array.
console.log(merge);
let spreadArray = [...a, ...b]; // using spread operator.
console.log(spreadArray);

console.log("Using For loop");

let res8 = [];

for (let index = 0; index < a.length; index++) {
    const element = a[index];
    res8.push(element);
}
for (let index = 0; index < b.length; index++) {
    const element = b[index];
    res8.push(element);
}
console.log("Using for loop : "+res8);

console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");

let laptop1 = {
    name: "hp",
    ram: "8 GB",
    processor: "core i7",
    hd: "500 GB"
}

let mobile = {
    name : "samsung",
    ram: "8 GB",
    storage: "150 GB"
}

let sprObj = {...laptop1, ...mobile}; // using spread operator
console.log(sprObj);
let asObj = Object.assign({}, laptop1, mobile); // using assign()
console.log(asObj);

console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");

let st1 = "Datta ";
let st2 = "Mahangare";
// using concat()
let strMerge = st1.concat(st2);
console.log(strMerge);

// using + operator
let plusStr = st1+st2;
console.log(plusStr);

// using template literals (`${}`)
console.log(`${st1} ${st2}`);

// Array.join() is used for string array.

console.log("\n++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++=");

function spread(...args)
{
    console.log(args);
    
}
spread(20,30,40);

function def(a,b,c=99,d,e,f=1)
{
    console.log(`${a},${b},${c},${d},${e},${f}`);
    
}
def(20,30,40,50);

console.log("\n++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++=");

const student = {
    name1: "Jenny",
    city: "Pune",
    age: 24,
    pin: 411057,
    country: "India",
    isMarried: true
}

let {name1,city,age,pin,country="USA"}=student;
console.log(name1,city,age,pin,country);

let des = ["Apple","banana","water melon","pine apple"];
let [des0,des1,des2,des3,des4,des5="peru"]=des;
console.log(des0,des1,des2,des3,des4,des5);
console.log("\n++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++=");

let forArray = [23,34,56,76,45,87];

let result = forArray.forEach(function(element,index,array){
        console.log(element,index);
        
});

let rs = forArray.forEach((element,index)=> {
    console.log(element);
    
});

console.log("\n++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++=");

let set1 = new Set();
set1.add(100);
set1.add(200);
set1.add(300);
set1.add(400);
console.log(set1);
console.log(typeof set1);

let set = set1.forEach((element,index,set1)=>{
        console.log(`${index} => ${element}`);
        
});

console.log("\n++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++=");

let map = new Map();
map.set(11, "hp");
map.set(12, "dell");
map.set(13, "lenovo");
console.log(map);

let mp = map.forEach(function(key,values) {
    console.log(key,values);
    
});
console.log("\n----- Using for each arrow function -----");

let mp1 = map.forEach((key,values)=>{
        console.log(key,values);
        
});

console.log("\n---------- find positive number ----------");

let pos = [12,-67,78,-99,209,-77];
console.log("Given array is: "+pos);

console.log("Positive element is :  ");
let posRes = pos.forEach((element)=>{
            if(element > 0){
                console.log(element);
                
            }
});


console.log("\n---------- find negative number ----------");

let pos1 = [12,-67,78,-99,209,-77];
console.log("Given array is: "+pos1);

console.log("Negative element is :  ");
let negRes = pos.forEach((element)=>{
            if(element < 0){
                console.log(element);
                
            }
});

console.log("\n---------- revers string ----------");

let str5 = "hello";
let op = "";
for(let i=str5.length-1;i>=0;i--)
{
   var an = str5[i];
   console.log(an);
//    console.log(typeof ans);
   
   
}
// console.log(op);
console.log(typeof an);
console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++");

let table = {
    size : "4 sq feet",
    color : "white",
    price : 5000,
    11 : "40 KG"
}

console.log(table);
console.log(table.size);
console.log(table[11]);

console.log("\n+++++++++++++++++++++++++++++++++++++++++++++++++++++++++");

let table1 = `{
    "size" : "4 sq feet",
    "color" : "white",
    "price" : 5000,
    "weight" : "40 KG"
}`
console.log(table1);
console.log(typeof table1);
let newTable = JSON.parse(table1);
console.log(newTable);
console.log(typeof newTable);
console.log(newTable.color);

console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");

class Prog
{
    constructor()
    {
        console.log("super class constructor");
        
    }
    display1()
    {

    }
}
class Main extends Prog
{
    
    constructor(num)
    {
        super();
        console.log(num);
        // return num;
    }
    display()
    {
        console.log("main class function");
        
    }
}
let main = new Main(20);
main.display();

console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");


let z = "hello";
let zs = "";
for(let i=z.length-1;i>=0;i--)
{
    let element = z.charAt(i);
    // console.log(element);
    zs = zs+element;
    
}console.log(zs);


