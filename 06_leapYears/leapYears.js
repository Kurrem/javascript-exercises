const leapYears = function(year) {
    /*
    A leap year is a year which is divisible by 4. Full century years (1900, 2000, etc)
    are only leap years if they are divisible by 400.

    Input a year. Modulus divide that by 4, if result is 0 its a leap.
    Try the original year for 100 also, if result is 0 try again for 400, then
    it is a leap otherwise not.
    */
    if (year % 100 === 0 && year % 400 === 0) return true
    if (year % 4 === 0 && year % 100 !== 0) return true
    else return false
};

// Do not edit below this line
module.exports = leapYears;
