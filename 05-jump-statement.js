console.log(`===== break =======`);
for (let index = 0; index <= 10; index++) {
    console.log(index);
    if (index==5) {
        break;
    }   
}
console.log(`======= continue ============`);
for (let index = 0; index <= 5; index++) {
    console.log(`Start ${index}`);
    if (index==2) {
        continue;
    }
    console.log(`End ${index}`);
}