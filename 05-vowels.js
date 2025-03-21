console.log(`======= Vowels Print =====`);
var fruit = "JavaScript Love";
var vowels = "aeiou";
for (let index = 0; index < fruit.length; index++) {
    var char = fruit.charAt(index);
    if(vowels.includes(char)){
        console.log(char);
    }
}