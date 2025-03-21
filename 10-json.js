let std = {
    firstName: "Jenny",
    lastName: "Gates",
    fullName: "ABC MVC DDDD",
    age: 22,
    college: "Government College Pune",
    address:{
        flat: 1005,
        society: "Horizon",
        street: "SB Road",
        city: "Pune"
    },
    friends: ["Jenny", "Bill", "Stew", "Elon"]
}
console.log(typeof std);

const stdJsonString = JSON.stringify(std);
console.log(stdJsonString);

console.log("========== Json to Object ====================");
const employeeJson = `
{
    "employee_id": 11,
    "name": "Jenny",
    "isMarried": true,
    "skills": ["Java", "React", "Angular", "JavaScript"],
    "address": {
        "flat": 1005,
        "floor": 10,
        "street": "Wakad",
        "city": "Pune",
        "PIN": 411057
    } 
}`;
console.log(typeof employeeJson);
const employeeObj = JSON.parse(employeeJson);
console.log(typeof employeeObj);
console.log(employeeObj);