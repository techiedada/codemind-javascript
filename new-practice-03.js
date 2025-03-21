const employee1= `{
    "name" : "Kartik Togeti",
    "age" : 32,
    "address" : {
                    "AreaAddress" :"19 & 18 main street",
                    "city": "Bengluru"
                },
    "PhoneNumber" : [{"type": "home", "number" : "9823 9756 67"},{"type": "fax", "number" : "01211111110"}]
}`;
const empDetails =JSON.parse(employee1);
console.log(typeof empDetails);

console.log(empDetails);
console.log(empDetails.name);
console.log(empDetails.age);
console.log(empDetails.address.city);
//how to access subObject values from array .that array itself inside in main object of json?
//console.log(empDetails.phoneNumber.number);
console.log(empDetails.PhoneNumber[0].number);
console.log(empDetails.PhoneNumber[1].number);




console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");

let data = new Set();
console.log(typeof data);
data.add('A');
console.log(data);
data.add(5);
console.log(data);
data.delete('A');
console.log(data);
data.clear();
console.log(data);
 

console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++");

let array1 = [2,4,5,6,7];
let array2 = [1,5,13,5,7];

let ans = array1.join();
console.log(ans);

let res = array2.toSorted();
console.log(res);

console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++");


let map = new Map();
map.set('name','datta');
map.set('city','pune');
map.set('pin',412301);
console.log(map);
let value = map.get('pin');
console.log(value);
map.set('city',);
let dd=map.delete('city');
console.log(map);
map.set('city','Pune');
map.set('city',);
console.log(map);




console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++");
function sort(){
    let array2 = [1,5,13,5,7];
    let ans = array2.sort((a,b)=>a-b);
    console.log(ans);
    
}sort();

let ans1 = array2.sort((a,b)=>b-a);
    console.log(ans1);

    console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++");

//let array=[22,22,43,56,78];

let set = new Set();
set.add(20);
set.add(30);
set.add(40);
set.add(50);
set.add(60);
console.log(set);
let index=0;
set.forEach((element,index)=>{
    console.log(`${index} =>    ${element}`);
    index++;
});


