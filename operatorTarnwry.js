console.log(`--------------- assignment 3------------------`);

var elig = function(n1,n2,n3,name){
    var result = n1 == 70 || n2 == 80 || n3 == 90 ? ` congrates ,${name} you are eligible for interview`:`sorry ${name}you are not eligible for interview`;
    console.log(`${result}`);
}

elig(80,86,90,"akash");
elig(70,65,55,"oggy");
elig(60,79,88,"Harry");
elig(70,65,55,"jack");

console.log(`--------------- assignment 2------------------`);

function malemarriageEligiblity(gen,age,boyname) {
    var result = age >=21 ? `hey, ${boyname} you are eligible for marriage`:`hey ,${boyname} you are not eligible for marriage`;
    console.log(result);

}
malemarriageEligiblity("male",20,"oggy");
malemarriageEligiblity("male",27,"Akash");
malemarriageEligiblity("male",19,"jack");

console.log(`----------------------------------------------------------------------`);

function femalemarriageEligiblity(gen,age,girlname) {
    var result = age >=18 ? `hey, ${girlname} you are eligible for marriage`:`hey ,${girlname} you are not eligible for marriage`;
    console.log(result);

}
malemarriageEligiblity("female",18,"pari");
malemarriageEligiblity("female",15,"rani");
malemarriageEligiblity("female",20,"riya");




