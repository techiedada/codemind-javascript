class Student{
    // Data members
    // Constructor
    constructor(name, college, marks, city){
        this.name = name;
        this.college = college;
        this.marks = marks;
        this.city = city;
    }

    // Member Function
    details(){
        console.log(`Name: ${this.name}, college: ${this.college}, marks: ${this.marks}, city: ${this.city}`);
        
    }
}
const stdJenny = new Student("Jenny", "COEP", "90%", "Pune");
stdJenny.details();

const stdStew = new Student("Stew", "MIT", "67%", "LA");
stdStew.details();

const stdElon = new Student("Elon", "Stanford", "97%", "LA");
stdElon.details();

function Player(name, totalRuns, ranking){
    this.name = name;
    this.totalRuns = totalRuns;
    this.ranking = ranking;
}
const playerKohli = new Player("Virat Kohli", "40K", 1);
console.log(playerKohli);

const playerRohit = new Player("Rohit Sharma", "30K", 4);
console.log(playerRohit);

