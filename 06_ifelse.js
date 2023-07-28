
console.log("---------------Assignment 2----------------------");

function voteEligibility(age,name) {
    /*if (age<=18) {
        console.log(`${age} invalied age`);
        return;
    }*/
   if (age>=18) {
    console.log(`hi ${name} you are ${age}  eligiable for vote`);
   } else {
    console.log(`sorry ${name} you are ${age}  not eligiable for vote`);
   }
}voteEligibility(18,"akash");
voteEligibility(20,"Ram");
voteEligibility(17,"Sakshi");
voteEligibility(40,"Rahul");
