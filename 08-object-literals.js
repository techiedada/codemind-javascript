// object literals
let person = {
    name: "Jenny",
    age: 22,
    city: "Pune"
}
console.log(typeof person);
console.log(`====Accessing Properties ========`);
console.log(`Person Name: ${person.name}`);
console.log(`Person City: ${person["city"]}`);
console.log(`Person Age: ${person.age}`);

console.log(`==== Updating Properties ========`);
person.age = 30;
person.city = "Mumbai";
console.log(person);

console.log(`==== Deleting Properties ========`);
delete person.city;
console.log(person);

console.log(`==== After Object creation, Adding Properties ========`);
person.isMarried = true;
person.designation = "Developer";
console.log(person);

console.log("===== Traversing Objects =========");
for (const key in person) {
    if (Object.prototype.hasOwnProperty.call(person, key)) {
        const element = person[key];// person["name"]
        console.log(`${key} ==> ${element}`);
    }
}

console.log("==== Empty Objects =======");
let address = {

};
// address.pin=11 // for adding


console.log("==== Nested Objects =======");
let student = {
    firstName: "Jenny",
    lastName: "Gates",
    age: 22,
    college: "Government College Pune",
    address:{
        flat: 1005,
        society: "Horizon",
        street: "SB Road",
        city: "Pune"
    }
}
console.log(student.address);
console.log(`Street: ${student.address.street}`);
console.log(`City: ${student.address.city}`);
student.address.floorNumber = 10;
console.log(student.address);

console.log("====== Object with actions or methods =========");
let employee = {
    name: "Jenny",
    age: 22,
    city: "Pune",
    walk: function(){
        console.log('I can walk..');
    },
    details: function(){
        console.log(`Employee Details: Name: ${this.name}, AGE: ${this.age}, CITY: ${this.city}`);
    }
}
employee.walk();
employee.details();

