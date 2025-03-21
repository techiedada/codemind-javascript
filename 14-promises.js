let promise = new Promise(function(success, failure){
    // success("Yes.. Jenny.. Let get married...");
    failure("Ohh... Jenny Sorry. I can't marry with you.. ");
});
promise.then(function(success){
    console.log(`======= Inside then() =====`);
    console.log(success);
})
.catch(function(failure){
    console.log(`======= Inside catch() =====`);
    console.log(failure);
})
.finally(function(){
    console.log('Finally....');
    
})
console.log("ddd");
