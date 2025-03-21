class Vehicle {
    constructor(company, enginePower, yearMfg){
        this.company = company;
        this.enginePower = enginePower;
        this.yearMfg = yearMfg;
    }
    details(){
        console.log(`Company Name: ${this.company}, Engine Power: ${this.enginePower}, Year Mfg: ${this.yearMfg}`);
    }
}
class Car extends Vehicle{
    constructor(carType, company, enginePower, yearMfg){
        super(company, enginePower, yearMfg);
        this.carType = carType;
    }
}

const cretaCar = new Car("XUV", "Hyundai", "1500CC", 2024);
console.log(cretaCar);

class Truck extends Vehicle{
    constructor(weight, numberOfWheels, company, enginePower, yearMfg){
        super(company, enginePower, yearMfg);
        this.weight = weight;
        this.numberOfWheels = numberOfWheels;
    }
}
const truckTata = new Truck("300Tone", 24, "TATA", "5000CC", 2023);
console.log(truckTata);