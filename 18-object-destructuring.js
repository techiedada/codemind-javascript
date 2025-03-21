const student = {
    name: "Jenny",
    city: "Pune",
    age: 24,
    pin: 411057,
    country: "India",
    isMarried: true
}


let { name, city, age, country="USA", isMarried, marks=0} = student;
console.log(name, city,age,country, isMarried);
console.log(marks);


console.log("+++++ Array Destructuring with default values.. +++++");

const [n1, n2, n3="MyLove", n4=1]= ["Jenny", "Elon", "Stew"];
console.log(n1,n2,n3,n4);

// const array = ["Jenny", "Elon", "Stew"];
// const [ n1, n2, n3="MyLove", n4=1] = array;
// console.log(n1,n2,n3,n4);
// console.log(array);

let array = [2,4,5,7,8];
const [a,b,c,d,e,f=9,g] = array;
console.log(a,b,c,d,e,f,g);
