console.log("Print number from 5 to 15 by incrementing 1");
var i=5;
while (i<=15) {
    console.log(`${i}`);
    i++;
}

console.log("\nPrint number from 50 to 40. decrementing by 1");
var i=50;
while(i>=40){
    console.log(`${i}`);
    i--;
}

console.log("\nFind first 15 Odd Numbers");
var i=1;
while (i<30) {
    console.log(`${i}`);
    i=i+2;
}

console.log("\nFind first 10 Even Numbers");
var i=0;
while(i<20){
    console.log(`${i}`);
    i=i+2;
}

console.log("\nPrint table of 5 like 5, 10, 15, 20, --- 50");
var i=5;
while (i<=50) {
    console.log(`${i}`);
    i=i+5;
}

console.log("\nPrint table of 10 like 10, 20, 30, --- 100");
var i=10;
while (i<=100) {
    console.log(`${i}`);
    i=i+10;
}

console.log("\nPrint table of 10 in revers order like 100, 90, 80, --- 10");
var i=100;
do{
    console.log(`${i}`);
    i=i-10;
    
}while(i>=10);