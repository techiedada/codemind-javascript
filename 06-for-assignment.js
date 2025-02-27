console.log("Print number from 5 to 15 by incrementing 1");

for (let index = 5; index < 16; index++) {
    console.log(`${index}`);
}

console.log("\nPrint number from 50 to 40. decrementing by 1");
for (let index = 50; index >= 40; index--) {
    console.log(`${index}`);
}

console.log("\nFind first 15 Odd Numbers");
for (let index = 1; index < 30; index=index+2) {
    console.log(`${index}`);
}

console.log("\nFind first 10 Even Numbers");
for (let index = 0; index < 20; index=index+2) {
    console.log(`${index}`);
}

console.log("\nPrint table of 5 like 5, 10, 15, 20, --- 50");
for (let index = 5; index <= 50; index=index+5) {
    console.log(`${index}`);
}

console.log("\nPrint table of 10 like 10, 20, 30, --- 100");
for (let index = 10; index <= 100; index=index+10) {
    console.log(`${index}`);
}

console.log("\nPrint table of 10 in revers order like 100, 90, 80, --- 10");
for (let index = 100; index >= 10; index=index-10) {
    console.log(`${index}`);
}
