let employee = {
    name: "Jack",
    id: 12301,
    address: "USA",
    salary: 450000
}
let newEmployee = employee; // shallow cloning
console.log(employee);
console.log(newEmployee);

newEmployee.address = "New york";
console.log("After modification");
console.log(employee);
console.log(newEmployee);

console.log("Example of deep cloning");

let laptop = {
    name: "hp",
    price: 55000,
    ram: "8 GB",
    type:{
        dell:50000,
        lenovo:60000
    },
    processor: "CORE i7" 
}

let newLaptop = JSON.parse(JSON.stringify(laptop));
console.log(typeof newLaptop); //returns string
console.log(laptop);
console.log(newLaptop);
console.log("After modification..");
 
laptop.ram="16 GB";
console.log(laptop);
console.log(newLaptop);

