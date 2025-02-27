console.log("------- Task 1 -------");

class Vehicle{
    name;
    model;
    color;
    price;
    year;
    fuel;
    constructor(name,model,color,price,year,fuel){
        this.name=name;
        this.model=model;
        this.color=color;
        this.price=price;
        this.year=year;
        this.fuel=fuel;
    }
    details(){
        console.log(`Name: ${this.name} \nModel: ${this.model} \nColor: ${this.color} \nPrice: ${this.price} \nYear: ${this.year} \nFuel Type: ${this.fuel}`);
        console.log("\n");
    }
}
const vehicleDef = new Vehicle("Land Rover Defender","110 X-Dynamic HSE 3.0","White","2.20 Crore","2022","Diesel");
console.log(`Vehicle Details:`);
vehicleDef.details();

const vehicleMer = new Vehicle("Mercedes-Benz C-Class","C 200","Sodalite Blue","78.84 Lakh","2020","Diesel");
vehicleMer.details();

const vehicleBMW = new Vehicle("BMW X5","xDrive40i xLine","Sodalite Blue","1.16 Crore","2018","Petrol");
vehicleBMW.details();

const vehicleRanger = new Vehicle("Range Rover","HSE LWB 3.0","White","5.89 Crore","2018","Diesel");
vehicleRanger.details();

const vehicleFor = new Vehicle("Toyota Fortuner","HSE LWB 3.0","White","4X2 MT 2.7","2024","Diesel");
vehicleFor.details();

console.log("\n------- Task 2 -------");

class College{
    name;
    university;
    establish;
    location;
    constructor(name,university,establish,location){
        this.name=name;
        this.university=university;
        this.establish=establish;
        this.location=location;
    }
    details(){
        console.log(`College Name: ${this.name} \nUniversity: ${this.university} \nEstablish Year: ${this.establish} \nLocation: ${this.location}`);
        console.log("\n");
    }
}
const collegeWag = new College("Waghire College","Pune University","1972","Saswad");
console.log("College Info..");
collegeWag.details();

const collegeFer = new College("Fergusson","Pune University","1884","Pune");
collegeFer.details();

const collegeSP = new College("SIR PARASHURAMBHAU","Pune University","1916","Pune");
collegeSP.details();

const collegeMIT = new College("MIT","University of Pune","1983","Pune");
collegeMIT.details();

