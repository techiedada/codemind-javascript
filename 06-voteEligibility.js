
var voteEligible = function(age){
    if (age == 0 || age < 0 || age > 130 || age == null) {
        console.log(`${age} : Is Invalid Data`);
        
    } else {
        if (age >= 18) {
            console.log(`Age ${age} is Eligible for vote`);
            
        } else {
            console.log(`Age ${age} is Not Eligible for vote`);
        }
    }
}
voteEligible(45);
voteEligible(17);
voteEligible(8);
voteEligible(20);
voteEligible(-10);
voteEligible(200);
voteEligible(0);
voteEligible(null);