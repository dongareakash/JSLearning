var monthofYear = function (month) {
    switch (month) {
        case 1:
            console.log(`${month} - January`);
            break;

            case 2:
            console.log(`${month} - February`);
            break;

            case 3:
            console.log(`${month} - March`);
            break;

            case 4:
            console.log(`${month} - April`);
            break;

            case 5:
            console.log(`${month} - May`);
            break;

            case 6:
            console.log(`${month} - June`);
            break;

            case 7:
            console.log(`${month} - July`);
            break;

            case 8:
            console.log(`${month} - Augest`);
            break;
                   
            case 9:
            console.log(`${month} - Septmeber`);
            break;

            case 10:
            console.log(`${month} - October`);
            break;

            case 11:
            console.log(`${month} - november`);
            break;

            case 12:
            console.log(`${month} - december`);
            break;
    
        default:
            console.log(`${month}- invalid data`);
            break;
    }

   // console.log("end of switch case");
}
monthofYear(0);
monthofYear(2);
monthofYear(5);
monthofYear(12);
monthofYear(15);
monthofYear(100);
monthofYear(null);
monthofYear(undefined);