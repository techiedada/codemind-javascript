let professor = {
    name: "James Gosling",
    age: 55,
    city: "Pune",
    gender: "Male",
    department: "Computer Science",
    subject: "Core Java",
    degrees:{
        engineering: 'CSC',
        PHD: 'Adv Computing',
        MBBS: 'medicine and surgery',
    }
    
}
console.log(`===== Accessing Properties of Object ========`);
console.log(professor);

console.log("\n====== Nested Objects =======");
console.log(professor.degrees);

console.log("\n====== Add Array in Objects =======");
professor.certificates= ["Hacker Rank Participation","Certificate in IFE Course","Certificate in Adv. Programming"];
console.log(professor.certificates);


console.log(`\n====== After Object creation, Adding Properties ========`);
professor.totalExperience= "14 Years";
console.log(`totalExperience: ${professor.totalExperience}`);

console.log(`\n ====== Updating Properties ========`);
professor.city = "Mumbai";
console.log(professor);

console.log("\n ===== Add new certificates ===== ");
professor.certificates.splice(2,0,"Oracle Certified");
console.log(professor.certificates);

console.log(`\n ====== Last elements of an Array ========`);
let lastElement = professor.certificates[professor.certificates.length-1];
console.log(lastElement);

console.log("\n===== Traversing Object Using For In loop =====");
for (const key in professor) {
    if (Object.prototype.hasOwnProperty.call(professor, key)) {
        const element = professor[key];
        if(typeof element == 'object')
        {
            for (const key in element) {
                    const element1 = element[key];
                    console.log(`${key} ==> ${element1}`);
                }
            
        }
        else{
                console.log(`${key} ==> ${element}`);
        }
    }
}

console.log("\n---------------------------------");
//console.log(typeof(professor.age));
 

