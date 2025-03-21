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


function objProfessor(obj)
{
    for (const key in obj) 
    {
        if (Object.prototype.hasOwnProperty.call(obj, key)) 
        {
                const element = obj[key];
                if(typeof(element) == 'object') 
                {
                       for (const key in element) 
                        {
                        if (Object.prototype.hasOwnProperty.call(element, key)) {
                            const element1 = element[key];
                            console.log(`${key}: ${element1}`);
                        }
                       } 
                            
                        
                    
                }
        
                else
                {
                    console.log(`${key}: ${element}`);
                 }
            
        }
    }
}

objProfessor(professor);



console.log("\n---------------------------------");


const emp ={
    name:"ganesh",
    city:"pune",
}
console.log(emp);
emp.pin=1234;
console.log(emp);
emp.city="Mumbai";
console.log(emp);
Object.freeze(emp);
emp.city="Pune";
console.log(emp);

const emp1 ={
    name1:"Datta",
    city1 : "Mumbai",
}
const data = Object.assign({},emp,emp1);
console.log(data);


const clone = Object.assign({},emp);
console.log(clone);

console.log("\n--------------------------------------------------------------------");


let array = [10,20,45,30,77,60];
console.log(array);
var count=0;
for (let index = 0; index < array.length ; index++) 
{
    if (array[index]%2 == 0) 
        {
            
            console.log(array[index]);
            count++;
        }
}
        
console.log("Total count of even number is: "+count);


