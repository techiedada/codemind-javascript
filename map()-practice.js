let mapArray = [1,2,3,4,7,44,33,67];
let ans = mapArray.map((element,index,mapArray)=>{
    return element*3;
});
console.log(ans);

console.log("___________________________________________");

let filterArray = [22,44,55,76,90];
let ans1 = filterArray.filter((element,index,filterArray)=>{
    if(element % 2 == 0)
    {
        return element;
    }
});
console.log("EVEN elements "+ans1);

console.log("___________________________________________");

let reduceArray = [2,3,4,5];
let ans2 = reduceArray.reduce((result, element)=>{
            return result + element;
});
console.log("Sum is : "+ans2);

console.log("___________________________________________");

let flatArray = [1,2,[3,4,[5,6,[22,33]]]];
let ans3 = flatArray.flat(3);
console.log(ans3);

let emptyA = [1,2, , ,55,66, ,69];
let ans4 = emptyA.flat();
console.log(ans4);

