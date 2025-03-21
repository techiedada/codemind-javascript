const frdList = ["Jenny", "Stew", "Bill", "Elon"];
frdList.sort(); // Sorting in ascending order 
frdList.reverse(); // for descending reverse the array. 
console.log(frdList);

const arrayNum = [9, 4, 11, 31, 81, 250];
// arrayNum.sort(); // Sorting 
arrayNum.sort((a,b)=>{
    return a>b? 1: -1;
});
console.log(arrayNum);
// arrayNum.reverse();



console.log("--------------------------------");

let word = "mahangare";
let slArray = word.split('');
console.log(slArray);
let sortA=slArray.sort();
console.log(sortA);
let ans = sortA.join('');
console.log(ans);
console.log(typeof ans);


let ovels = '';
for(let i=0;i<word.length;i++)
{
    if(word[i]== 'a' || word[i]=='e' || word[i]=='i' || word[i]=='o' || word[i]=='u')
    {
        ovels += word[i]
        
    }
}
console.log(ovels);

console.log("--------------------------------");


