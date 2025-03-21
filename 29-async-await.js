// async
// await

async function fetchAPI(){
    const fullName = "Jenny Gates";
    return fullName;
}

const per =  fetchAPI();
console.log(per);
per.then((success)=>{
    console.log(`Inside then....`);
    console.log(success);   
}).catch((failure)=>{
    console.log(failure);
});

// When we return the promise from the async function then it simply return that promise as it is
async function fetchData(){
    const promise = new Promise((success, reject )=>{
        success("==== Promise Fulfilled====");
    });
    return promise;
}

fetchData().then((success)=>{
    console.log(success);
}).catch((failure)=>{
    console.log(failure);
});

console.log("==== START of the Program =====");
async function fetchData1(){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            // resolve("Successfully fetched the data...");
            reject("Failed to fetch the data.....");
        }, 5000);
    });
}
async function main(){
    try {
        const promiseResolve = await fetchData1();
        console.log(promiseResolve);
    } catch (error) {
        console.log(`----- Inside catch block ---------`);
        console.log(error);
    }
    console.log("===== main END ======"); 
}
main();
console.log("==== END of the Program =====");

console.log("===== fetch() API =======");
const responseData = await fetch("https://fakestoreapi.com/products");
const products = await responseData.json();
for (const product of products) {
    console.log(`ID: ${product.id}, Title: ${product.title}, Price: ${product.price}, Count: ${product.rating.count}`);
}