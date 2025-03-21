function spaceCount(str)
{

    console.log(`Given string is: '${str}'`);
        

    let newStr = str.split(" ");
    console.log(newStr);

    let newStrLength = newStr.length-1;
    console.log("Total space of given string : "+newStrLength);
    // let totalSpaces = str.length - newStrLength;
    // console.log("Total spaces from string is:"+totalSpaces);
}
console.log("_______________________________________________________________");
spaceCount(" Revision is the mother of success ");

console.log("_______________________________________________________________");

let string = "Revision is the mother of success";
console.log("Given string : "+string);

let count = 0;

for (const element of string) {
    if(element == " ")
    {
        count ++;
    }
}
console.log("Total spaces is : "+count);
console.log("_______________________________________________________________");




let array = [1,2,3,6,45,34,23];
console.log("given array is :"+array);

let count1=0;
let newArray = [];
let oddArray = [];
for (const element of array) {
    if(element % 2 == 0)
        {
            // console.log(element);
            count1++;
            newArray.push(element);
        }    
        else{
            // console.log(element);
            oddArray.push(element);
            
        }
}
console.log("count is : "+count1);
console.log("Even numbers from array is - ");
console.log(newArray);
console.log("odd numbers from array is - ");
console.log(oddArray);

console.log("_______________________________________________________________");


let array1 = [1,2,3,6,45,34,23];
console.log("Even index elements : ");

for(let i=0;i<array1.length;i++)
{
    if(i % 2 == 0)
    {
        console.log(`${i} ==> ${array1[i]}`);
        
    }
}

console.log("_______________________________________________________________");

const str = "hello";
let res ="";
for(let i=str.length-1;i>=0;i--)
{
    let ans = str[i];
    res += str[i];
}
console.log(" Revers string is:"+res);
console.log("_______________________________________________________________");

const datta = [1,2,3,4,5,6,7];
datta.reverse();
console.log(datta);

console.log("_______________________________________________________________");

const sortArray = [23,45,78,4,6,22,99];

let result=sortArray.sort((a,b)=>{
    return a>b?1:-1;
});
console.log(result);

console.log("_______________________________________________________________");

let map = new Map();
map.set('name',"Datta");
map.set('city',"Pune");
map.set('pincode',"412301");
console.log(map);
map.set(11,"USA");
console.log(map);
console.log(typeof 11);
map.set('mapArray', [1,2,3,[11,22,[33,55]]]);
console.log(map);
console.log(map.get('city'));
console.log(map.get('mapArray'));

let mr = map.get('mapArray');
console.log(mr[3][2]);
console.log(map.delete(11));
console.log(map.keys());
console.log(map.values());



// console.log(map.get('mapArray[1]'));
console.log("_______________________________________________________________");

let emp ={
    name: 'Elon',
    country: 'USA',
    car : 'BMW',
    13 : '11223344',
    education : {
        branch : "CS",
        college : "Waghire",
        degree : "MCS",
        year : 2018,
    },
    empArray: [2,4,6,[23,45,[77,66,88]]],
};

console.log(typeof 13);
console.log(typeof emp.empArray);
console.log(emp.empArray);
console.log(emp.empArray[3]);
console.log(emp.empArray[3][2][2]);
console.log(emp.education.degree);
emp.education.degree='MCA';
console.log(emp.education.degree);
console.log(Object.keys(emp));
console.log(Object.values(emp));

console.log(typeof emp[13]);
console.log("____________________________________");

for (const key in emp) {
    if (Object.prototype.hasOwnProperty.call(emp, key)) {
        const element = emp[key];
        console.log(element);
        
    }
}
console.log("____________________________________");
Object.keys(emp).forEach((keys)=>{
    console.log(`${keys}`);
    
});
console.log("____________________________________");

class Prog{
    constructor(a)
    {
        console.log(a);
        

    }
    display()
    {
        console.log("In display method");
        
    }
}
let p = new Prog("Datta");
p.display();
console.log("____________________________________");

let emp2 ={
    name: 'Elon',
    country: 'USA',
    car : 'BMW',
    13 : '11223344',
    education : {
        branch : "CS",
        college : "Waghire",
        degree : "MCS",
        year : 2018,
    },
    empArray: [2,4,6,[23,45,[77,66,88]]],
};

let emp3 = {...emp2};
emp2.country='india';
emp2.education.year='2025';
console.log(emp2);
console.log(emp3);


 console.log(emp2.education);
 console.log(emp3.education);

 console.log("____________________________________");

 let employee ={
    name: 'Elon',
    country: 'USA',
    car : 'BMW',
    13 : '11223344',
    education : {
        branch : "CS",
        college : "Waghire",
        degree : "MCS",
        year : 2018,
    },
    empArray: [2,4,6,[23,45,[77,66,88]]],
};

let newEmployee = Object.assign({}, employee);
employee.car='CRETA';
console.log(employee);
console.log(newEmployee);
employee.education.year='2033';
console.log(employee.education);
console.log(newEmployee.education);

console.log("____________________________________");

let cloneArray = [2,3,[23,33,44,[111,121,134]]];

let newClone = Object.assign([],cloneArray);
console.log(newClone);
console.log(cloneArray);
cloneArray[2][2]=777;
console.log(newClone[2]);
console.log(cloneArray[2]);
cloneArray[2][3][3]=777;
console.log(newClone[2][3]);
console.log(cloneArray[2][3]);

console.log("____________________________________");

const originalArray = [1, 2, [3, 4], { a: 5 }];
const clonedArray = JSON.parse(JSON.stringify(originalArray));
console.log(clonedArray);
console.log(originalArray);
clonedArray[3].a = 99;
console.log(clonedArray[3]);
console.log(originalArray[3]);

console.log("____________________________________");

function restPara(n1, ...n2)
{
    console.log(n1);
    console.log(n2);
}
restPara(10,20,1,1,3,4,5);

console.log("____________________________________");

function defaultValue(n1,n2=2,n3,n4=11,n5)
{
    console.log(n1);
    console.log(n2);
    console.log(n3);
    console.log(n4);
    console.log(n5);
    console.log(n1*n5);
    console.log(typeof n5);
    
}
defaultValue(5,6,7);

console.log("____________________________________");

class A{
    constructor()
    {

    }
    display()
    {
        let a=20;
        console.log("parent class");
        
    }

}
class B extends A
{
    constructor()
    {
        super();
    }
    display()
    {
        super.display();
        console.log("child class");
        console.log(this.a);
        
    }
}
let aa = new B();
aa.display();

console.log("--------------------------------");

let word = "I am going to the office";

let ovels = 'aeiou';
for(let i=0;i<word.length;i++)
{
    if(ovels.includes(word[i]))
        console.log(word[i]);
        
}