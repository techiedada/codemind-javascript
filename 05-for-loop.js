console.log(`===== Program to print numbers from 1 to 10 =======`);

for (var index = 1; index < 11; index++) {
   console.log(index);
}

console.log(`===== Program to print numbers from 5 to 10 =======`);
for (let index = 5; index < 11; index++) {
    console.log(index);
}

console.log(`===== Program to print numbers from 0, 2, 4, 6, 8, 10 =======`);
for (let index = 0; index < 11; index=index+2) {
    console.log(index);
}

console.log(`===== Print the table of 5 =======`);
for (let index = 5; index <=50; index=index+5) {
    console.log(index);
}

console.log(`===== Print the table of 4 in reverse order =======`);
for (let index = 40; index >=4; index=index-4) {
    console.log(index);
}