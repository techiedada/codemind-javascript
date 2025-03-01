const emp= `
{
    "name": "Aleix Melon",
    "id": "E00245",
    "role": ["Dev","DBA"],
    "age": 23,
    "doj": "11-12-2019",
    "married": false,
    "address": {
        "street": "32, Laham St.",
        "city": "Innsbruck",
        "country": "Austria"
    },
    "referred-by": "E0012"
}`;
console.log(typeof emp);
const empObj = JSON.parse(emp);
console.log(typeof empObj);
console.log(empObj);
console.log("The Role is: "+empObj.role[0]);
const lastName = empObj.name.split(" ");
console.log("The lastName is: "+lastName[1]);
const year = empObj.doj.split("-");
console.log("The Joining year of employee is: "+year[year.length-1]);


 

