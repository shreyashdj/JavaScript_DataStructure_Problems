/*
    Write a Program to show Sum of three Integer adds to ZERO
*/

const prompt = require("prompt-sync")();

let intArray = new Array();
let flag = false;
console.log();
let arraySize = prompt(" Enter the size of the array : ");

//  adding elements to array
console.log(" Enter " + arraySize + " array values : ");
for (let i = 0; i < arraySize; i++) {
    intArray[i] = parseInt(prompt(" "));
}
console.log(" The Array is : " + intArray);

//  finding triplets whose sum is zero
console.log("\n Triplets whose sum is zero :")
for (let i = 0; i < intArray.length - 2; i++) {
    for (let j = i + 1; j < intArray.length - 1; j++) {
        for (let k = j + 1; k < intArray.length; k++) {
            if (intArray[i] + intArray[j] + intArray[k] == 0) {
                console.log(" " + intArray[i] + ", " + intArray[j] + ", " + intArray[k]);
                flag = true;
            }
        }
    }
}

if (flag == false) {
    console.log(" Triplet whose sum is 0 does not exist");
}
console.log();