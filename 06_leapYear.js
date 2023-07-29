var year = function (leap) {
    var lep=+leap;
    if (isNaN(leap)) {
        console.log("invalid data");
        console.log("-----------------");
    } else {
        if (leap%4==0 && leap%100!= 0) {
            console.log(`${leap} is a leap year`);
            console.log("-----------------");
        } else if (leap%400== 0) {
            console.log(`${leap}is a leap year`);
            console.log("-----------------");
        } else {
        console.log(`${leap}is not a leap year`);
        console.log("-----------------");
        }
    }
}
year(2020);
year(1999);
year(1600);
year(1945);
year("twenty twenty");
year(undefined);
year(NaN);
year(1750);