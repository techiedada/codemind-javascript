// Jenny - Home work preparation
// Home work completion
// Callback to Elon 

function jenny(callbacks){
    console.log(`==== Jenny went home and have snacks======`);
    console.log(`===== Jenny started home work preparation =========`);
    console.log(`===== After 2 hours she have completed her home work =======`);
    // Elon Callback
    callbacks();
}
// Elon - Playing Match
// Elon came back and started copying home work
//  Home work completion
let elon = function(){
    console.log(`******** Elon went home and have snacks ***********`);
    console.log(`******** Elon went to play match ***********`);
    console.log(`******** Elon came back and started copying homework ***********`);
    console.log(`******** Elon Completed his home work ***********`);
}

jenny(elon);


console.log(`====== setTimeout() ======`);
let show = function(){
    console.log(`== Inside show FE ===`);
}

setTimeout(show, 5000);