var elig = function(n1,n2,n3,name){
    var result = n1 == 70 || n2 == 50 || n3 == 90 ? " you are eligible":"you are not eligible";
    console.log(`${result}`);
}

elig(60,20,70,"akash");
elig(80,30,10,"oggy");
elig(90,50,40,"Harry");
elig(70,65,55,"jack");

