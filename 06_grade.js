console.log("---------------Assignment 3----------------------");

function gradeCalculation(mark) {
    var num = +mark;
    if (mark <= 0 || mark >= 100 || isNaN(mark)) {
        console.log("Invalid Marks,Please provide the valid marks");
        console.log("-------------------------------");
    }
    if (mark >= 90) {
         console.log(`${mark} your grade is A+`);
        console.log("-------------------------------");
    }else{

    if (mark >= 75 && mark <= 90) {
        console.log(`${mark}your grade is A`);
        console.log("-------------------------------");
    }else{

    if (mark >= 50 || mark <= 75) {
        console.log(`${mark}your grade is B`);
        console.log("-------------------------------");
    }else{
    if (mark >= 35 && mark <= 50) {
        console.log(`${mark}your grade is C, Need to improvement`);
        console.log("-------------------------------");
    }
}
    }
}

}
gradeCalculation(98);
gradeCalculation(80);
gradeCalculation(90);
gradeCalculation(0);
gradeCalculation(150);
gradeCalculation(-7);
gradeCalculation(35);
gradeCalculation(29);
gradeCalculation(64);
gradeCalculation(49);
gradeCalculation("91");
gradeCalculation("Eighty");
gradeCalculation(undefined);
gradeCalculation(null);