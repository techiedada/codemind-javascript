console.log(`===== Method Overriding =======`);

class Vehicle { // Parent or Base or Super
    constructor(company, enginePower, yearMfg){
        this.company = company;
        this.enginePower = enginePower;
        this.yearMfg = yearMfg;
    }
    details(){
        console.log(`Company Name: ${this.company}, Engine Power: ${this.enginePower}, Year Mfg: ${this.yearMfg}`);
    }
}
class Car extends Vehicle{ // Child or Derived class
    constructor(carType, company, enginePower, yearMfg){
        super(company, enginePower, yearMfg);
        this.carType = carType;
    }
    details(){
        console.log(`Car Type: ${this.carType}, Company Name: ${this.company}, Engine Power: ${this.enginePower}, Year Mfg: ${this.yearMfg}`);
    }
}

class Truck extends Vehicle{ // Child or Derived class
    constructor(weight, numberOfWheels, company, enginePower, yearMfg){
        super(company, enginePower, yearMfg);
        this.weight = weight;
        this.numberOfWheels = numberOfWheels;
    }
    details(){
        console.log(`Truck Weight: ${this.weight}, Car numberOfWheels: ${this.numberOfWheels} ,Company Name: ${this.company}, Engine Power: ${this.enginePower}, Year Mfg: ${this.yearMfg}`);
    }
}
const cretaCar = new Car("XUV", "Hyundai", "1500CC", 2024);
cretaCar.details();

const truckTata = new Truck("300Tone", 24, "TATA", "5000CC", 2023);
truckTata.details();