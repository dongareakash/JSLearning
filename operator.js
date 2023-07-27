function str(word) {
    var res = word.length;
    console.log(`lenght of given string is - ${res} length square ${res * res}`);
    
}
str("Javascript");
str("Google chrome");
str("Developer");

function nm(strn) {
    var len = strn.length;
    console.log(`length is - ${len}`);

    var sult = strn.split(" ");
    var res = sult.length;
    console.log(`total word in string ${res} and square ${res * res}`);
    console.log(`divide the lenght with total word ${len / res}`);
 
}
nm("I am react developer");

console.log(`--------------step 1---------------`);


var greatereNumber= function (n1,n2) {

    var res = n1 > n2 ? n1 : n2;
    console.log(`greater number ${res}`);
}
greatereNumber(12 , 15);
greatereNumber(432 , -86);


console.log(`--------------step 1---------------`);

var evenodd= function (num) {
    var result = num % 2 == 0 ?"even" :"odd";
    console.log(`given number is  - ${result}`);
    
}
evenodd(2);
evenodd(9);
evenodd(26);
evenodd(43);

console.log(`--------------step 1---------------`);

var wordLength = function (str) {
    var n = str.length;
    var string = n%2 == 0 ?"even" :"odd";
    console.log(`given string is  - ${string}`);
    
}
wordLength("Akash");
wordLength("react");
wordLength("developer");
wordLength("google");
