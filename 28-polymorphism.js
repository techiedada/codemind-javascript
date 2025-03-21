class Car {
    constructor(carType, company, enginePower){
        this.carType = carType;
        this.company = company;
        this.enginePower = enginePower;
    }
    priceAdd(p1, p2){
        if(arguments.length==1){
            console.log(`Car total price including extra value items: ${2000000 + p1}`);   
        }
        if(arguments.length==2){
            console.log(`Car total price including extra value items: ${2000000 + p1 + p2}`);   
        }
    }
    // details(price){
    //     console.log(`Car Details: ${carType}, ${company}, ${enginePower}`);
    //     console.log(`Price is: ${price}`); 
    // }
    // details(priceNum, yearMfg){
    //     console.log("details.........."); 
    //     console.log(`Price in number: ${priceNum}`);
    //     console.log(`Year MFG: ${yearMfg}`);
    // }
}
const creta = new Car("XUV", "Hyundai", "1500CC");
creta.priceAdd(5000);
creta.priceAdd(20000, 4000);