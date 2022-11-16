/*
    Take a range from 0 – 100, find the digits that are repeated twice like 33, 77, etc and store them in an array
*/

let repeatedDigitArray = new Array();

let check = function (number) {

    let unitPlace = number % 10;
    let tenthPlace = parseInt(number / 10);

    if (unitPlace == tenthPlace) {
        return true;
    } else {
        return false;
    }
}


for (let i = 0; i < 100; i++) {
    if (i > 0 && check(i)) {
        repeatedDigitArray.push(i);
    }
}
console.log("\n The repeated digits are : " + repeatedDigitArray);
console.log();