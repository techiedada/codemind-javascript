const a = 255;
console.log("Given number is : "+a);

let str = "codeMind";
console.log("Given string is: "+str);
// using for loop
let res = "";
for(let i=str.length-1;i>=0;i--)
{
        res = res + str[i]; 
}
console.log("Reverse of given string is: "+res);


console.log("+++++++++++++++++++++++");

let array = [1,2,3,3,4,5,6,6];
let res8 = [...new Set(array)];
console.log(res8);

console.log("+++++++++++++++++++++++");

// let college = {
//         name : "Waghire",
//         city : "Saswad",
//         year : "1995",
//         rank : 3
// }
// let newCollege = Object.assign({}, college);
// console.log(college);
// console.log(newCollege);
// newCollege.city='Pune';
// console.log(college);
// console.log(newCollege);

let college = {
               name : "Waghire",
               city : "Saswad",
               year : "1995",
               rank : 3,
               department:{
                name:'CS',
                staff: '20',
                count: '1000'
               },
               array : [2,4,6,8,10,12],
}
const newColl = Object.assign({}, college);
console.log(college);
console.log(newColl);
college.department.staff=27;
newColl.array[0]=99;
college.city='Pune';
console.log("After modification");
console.log(college.department);
console.log(newColl.department);

console.log("After modification");
console.log(college.array);
console.log(newColl.array);

console.log("After modification");
console.log(college);
console.log(newColl);

console.log("______________________________________________");

let array1 = [1,3,4,5,6,7,8,9];
let rs =[];
console.log("Given array is : "+array1);
for(let i=0;i<array1.length;i++)
{
        if(array1[i] % 2 == 0)
        {
                // console.log(array1[i]);
                rs.push(array1[i]);      
        }
}
console.log(rs);

console.log("______________________________________________");

const str1='Hello';
let ab='';
console.log("Given string is:"+str1);

for(let i=str1.length-1;i>=0;i--)
{
         ab=ab+str1[i];     
}
console.log("Reverse is : "+ab);

console.log("______________________________________________");
 let A = [1,2,3];
 A.splice(0,A.length);
 console.log(A);
 
 console.log("______________________________________________");

 const newArray = [9,6,7,3,4,5];
 console.log(newArray);
 
 const op = newArray.reverse();
 console.log(op);

 console.log("______________________________________________");
 const newArray1 = [19,6,17,3,14,5];
 console.log(newArray1);
 const data = newArray1.sort();
 console.log(data);
 
 console.log("______________________________________________");

 let name = "Datta ";
 let lName = "Mahangare";
 const fname = name.concat(lName);
console.log(fname);

console.log("______________________________________________");

let X = [1,2,3];
let Y = [4,5,6];
let XY = X.concat(Y);
console.log(XY);

console.log("______________________________________________");

const Z = [23,4,6,22,34,7,9,45];
Z.splice(2,1,5);
console.log(Z);
console.log("______________________________________________");
let newA = [1,2,3,4,5,6,7,8,9];
console.log(newA);

let sr = newA.slice();
console.log(sr);

let sl = newA.slice(2);
console.log(sl);


console.log("_______________________________________________________________");

let emp = {
        name : "Datta",
        city : "Pune",
        pin : "412301"
        greet: function(){
                console.log(this.name);
                
        }
};
console.log(emp);
emp.salary="25000";
console.log(emp);
emp['color']='white';
console.log(emp);
emp.data5();
