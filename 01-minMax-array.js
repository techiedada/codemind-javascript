
function minMax(){
    const array = [3,5,1,9,2,8];
    console.log("Given array is: "+array);
    let max = array[0];
    let min = array[0];
    for(let i=0; i<array.length;i++)
    {
        if(array[i]>max)
        {
            max=array[i]
        }
        if(array[i]<min)
        {
            min = array[i];
        }
    }
    console.log(`Max element from array is : ${max}`);
    console.log(`Min element from array is : ${min}`);
}
minMax();