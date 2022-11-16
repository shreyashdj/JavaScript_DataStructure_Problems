/* 
    1. Write a program in the following steps
    a. Generates 10 Random 3 Digit number.
    b. Store this random numbers into a array.
    c. Then find the 2nd largest and the 2nd smallest element without sorting the array.
*/

let numberArray = [];

/*
    function to generate random 3 digit number
*/
function generateRandomNumber() {
    return Math.floor(Math.random() * 900 + 100);
}

//  Pushing elements in array
console.log("\n Ten random 3 digit numbers in Array: ")
for (let i = 0; i < 10; i++) {
    numberArray.push(generateRandomNumber());
}
console.log(numberArray);                           // printing 10 random numbers of 3-digit

let largestNumber = 100;
let smallestNumber = 999;
let secondLargestNumber = 100;
let secondSmallestNumber = 999;

/*
    Finding Largest & Smallest element
*/

for (i = 0; i < numberArray.length; i++) {
    let currentElement = numberArray[i];

    if (currentElement > largestNumber) {
        largestNumber = currentElement;
    }

    if (currentElement < smallestNumber) {
        smallestNumber = currentElement;
    }
}

//printing largest and smallest element
console.log("\n Largest Element : " + largestNumber);
console.log(" Smallest Element : " + smallestNumber);

/*
    Finding Second Largest & Second Smallest element
*/

for (i = 0; i < numberArray.length; i++) {
    let currentElement = numberArray[i];

    if (currentElement > secondLargestNumber && currentElement < largestNumber) {
        secondLargestNumber = currentElement;
    }

    if (currentElement < secondSmallestNumber && currentElement > smallestNumber) {
        secondSmallestNumber = currentElement;
    }
}

// printing second largest and second smallest
console.log(" Second Largest Element : " + secondLargestNumber);
console.log(" Second Smallest Element : " + secondSmallestNumber + "\n");