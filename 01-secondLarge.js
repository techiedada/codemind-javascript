function secondLarge()
{
    let array1 = [10,12,2,7,8,86];
    console.log("Given array is: "+array1);
    if(array1.length < 2)
    {
        console.log("Array contain insufficient element");
    }
    let large = array1[0];
    let secondLarge = array1[0];

    for(let i=0;i<array1.length;i++)
    {
        if(array1[i]>large)
        {
            large = array1[i];
        }
    }
    //console.log(large);
    for(let i=0;i<array1.length;i++)
    {
        if(array1[i]>secondLarge && array1[i] != large)
        {
            secondLarge = array1[i];
        }
    }
    console.log("Second large element of array is: "+secondLarge);
}
secondLarge();