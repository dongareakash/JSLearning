var marriageEligbility =function (gender , age) {
    if (age>= 21 ) {
        console.log(`${gender},${age} - he is eligble for marriage`);
    }else{
        if (age >= 18) {
            console.log(`${gender},${age} - she is eligble for marriage`);
        }
    }
    
}
marriageEligbility("Male",17);
marriageEligbility("Male",25);
marriageEligbility("Female",28);
marriageEligbility("Female",16);
marriageEligbility("Other",35);
marriageEligbility("Other",41);
