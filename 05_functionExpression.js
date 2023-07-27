
console.log(`---------- STEP 1 ----------`);
var sqr = function (num) {
    
    console.log("square is --",num*num);

}
sqr(5);
sqr(10);
sqr(25);
sqr(100);
sqr(65);

console.log(`---------------- STEP 2 ----------------`);
console.log(`type os square is ---${typeof sqr}`);



console.log(`---------------- STEP 3 ----------------`);
var area = function(h,w) {
    console.log(`area is in rectange ${h*w}`);
    }
    area(450,900);
  

console.log(`---------------- STEP 4 ----------------`);
var swap = function (n1,n2) {
    console.log("before swap - ",n1,n2);
    var temp =n1;
    n1=n2;
    n2=temp;
    console.log(`after swap -`,n1,n2);
}
swap("Aakash","Akash");
swap(24,25);


console.log(`---------------- STEP 4 ----------------`);
var per = function (word) {
    console.log(`total character -${word.length}`);
    console.log(`charaCter at index 6 -${word.charAt(5)}`);
    console.log(`character at index 11-${word.charAt(11)}`);
    var result = word.length-1;

    console.log(`character at last using length property - ${word.charAt(result)}`);    
    console.log(`character at first - ${word.charAt(0)}`);
    var ss = word.split(" ");
    console.log(ss);
}
per("Java script is most populare scripting language")
