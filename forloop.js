

//1.WAP tp print numbuer from 5 to 15 by incrementing 1
for (let index = 5; index <= 15 ; index++) {
    console.log(index);   
}
console.log("--------------------------------");

//2.WAP tp print number from 50 to 40 by decrementing 1

for (let index = 50; index >= 40 ; index--) {
    console.log(index);  
}
console.log("--------------------------------");

//3.WAP to find first 15 odd number
console.log("first 15 odd number");
for (let index = 1; index < 30; index=index+2) {
    
    console.log(index);
    
}
console.log("--------------------------------");

//4.WAP to find first 10 even number
console.log("first 10 even number");
var result = " ";
for (let index = 0; index < 20; index=index+2) {
    result = result.concat(index).concat(" ");
  
}
console.log(result);
console.log("--------------------------------");
//5.WAP to print table of 5 like --> 5 10 15 20 25 ... 50
for (let index = 5; index <= 50; index=index+5) {
    console.log(index);
    
}
console.log("--------------------------------");
//6.WAP to print table of 10 like 10 20 30 40 .... 100
for (let index = 10; index <= 100; index=index+10) {
    console.log(index);
    
}
console.log("--------------------------------");

//7.WAP to print table of 10 reverse order like 100 90 80 70 ... 10
for (let index = 100; index >= 10; index=index-10) {
    console.log(index);
    
}
console.log("--------------------------------");


/*for (let index = 0; index <= 10; index=index+1) {
   console.log(index);
    
}*/
