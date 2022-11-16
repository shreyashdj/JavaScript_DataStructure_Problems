/*
    Write a Program to generate a birth month of 50 individuals
    between the year 92 & 93. Find all the individuals having birthdays
    in the same month. Store it to finally print.
*/

// created map to store data of birth dates
let birthdayMap = new Map();

let month1 = [];
let month2 = [];
let month3 = [];
let month4 = [];
let month5 = [];
let month6 = [];
let month7 = [];
let month8 = [];
let month9 = [];
let month10 = [];
let month11 = [];
let month12 = [];

birthdayMap.set(1, month1);
birthdayMap.set(2, month2);
birthdayMap.set(3, month3);
birthdayMap.set(4, month4);
birthdayMap.set(5, month5);
birthdayMap.set(6, month6);
birthdayMap.set(7, month7);
birthdayMap.set(8, month8);
birthdayMap.set(9, month9);
birthdayMap.set(10, month10);
birthdayMap.set(11, month11);
birthdayMap.set(12, month12);

for (let i = 1; i <= 50; i++) {
    let date = Math.floor(Math.random() * 30 + 1);
    let month = Math.floor(Math.random() * 12 + 1);
    let year = "199" + Math.floor(Math.random() * 6 + 2);

    (birthdayMap.get(month)).push(date +"/"+month + "/" +year)
}
console.log("\n Number of people having birthday in same month : \n");
console.log(birthdayMap);
console.log();