console.log("-------------------------------------");
function isPalindrome(str)
{
    let reverse = "";
    console.log(`Given string '${str}' is Palindrome:`);
    for(let i=str.length-1;i>=0;i--)
    {
        let result = str[i];
        reverse = reverse + result;
    }
    if(str == reverse)
    {
        // console.log(`Given string ${str} is Palindrome`);
        return true;
    }
    else{
        // console.log(`Given string ${str} is Not Palindrome`);
        return false;
    }
}
let ans1 = isPalindrome("madam");
console.log(`${ans1}`);
let ans2 = isPalindrome("141");
console.log(`${ans2}`);
let ans3 = isPalindrome("Sunday");
console.log(`${ans3}`);
let ans4 = isPalindrome("mom");
console.log(`${ans4}`);
let ans5 = isPalindrome("listen");
console.log(`${ans5}`);
let ans6 = isPalindrome("dad");
console.log(`${ans6}`);
console.log("-------------------------------------");
