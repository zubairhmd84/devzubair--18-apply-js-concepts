//---------------
//LEAP CODING WHICH IS NOT NOT THE RIGHT CODING. ITS JUST GIVEN AN EXAMPLE BY JHANKAR BHAI
//---------------

function leapYear(year){
    if (year % 4 == 0){
        return true;
    }
    else{
        return false;
    }
}
const myYear = 2100;
const isMyYearLeapYear = leapYear(myYear);
console.log('Is my year is Leap Year', isMyYearLeapYear);






//---------------
// program to check leap year
//---------------
function checkLeapYear(year) {

    //three conditions to find out the leap year
    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
        console.log(year + ' is a leap year');
    } else {
        console.log(year + ' is not a leap year');
    }
}
// take input
const year = 2100;
checkLeapYear(year);


//---------------
// MY LEAP YEAR 
//---------------
function leapYear(year){
    if((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)){
        console.log(year, "is Leap Year");
    }
    else{
        console.log(year, 'Is not Leap Year');
    }
}
const year = 2128;
leapYear(year);