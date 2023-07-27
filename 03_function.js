function swap(val1,val2) {
    console.log("inside swap function");
    console.log("before swap =","valu1",val1,"value2",val2);
    var temp=val1;
    val2=temp;
    console.log("After swap =","value1",val1,"value2",val2);
}

var num1= 100;//fuction 1
var num2 = 200;//fuction 2
swap(num1,num2);//calling fuction