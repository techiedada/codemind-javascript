
async function data() {
    return "Using async";
}
let res = data();
console.log(res);

res.then((response)=>{
console.log(`promise response is : ${response}`);

});
