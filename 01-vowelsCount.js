console.log(`======= Vowels Print =====`);
const myLove = "I Love only JavaScript";
var vowels = "aeiouAEIOU";
var count=0;
for (let index = 0; index < myLove.length; index++) {
    var char = myLove.charAt(index);
    if(vowels.includes(char)){
        console.log(char);
        count++;
    }
}
console.log("Total count of vowels is: "+count);
