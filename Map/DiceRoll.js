/*
    Write a program in the following steps
    a. Roll a dice and find the number between 1 to 6
    b. Repeat the Dice roll and find the result each time
    c. Store the result in a dictionary
    d. Repeat till any one of the number has reached 10 times
    e. Find the number that reached maximum times and the one that was for minimum times
*/

// creating diceMap and adding elements accordingly
let diceMap = new Map()
diceMap.set(1, 0)
diceMap.set(2, 0)
diceMap.set(3, 0)
diceMap.set(4, 0)
diceMap.set(5, 0)
diceMap.set(6, 0)
let limitFlag = true;
while (limitFlag == true) {
    let rollDice = (Math.floor(Math.random() * 6 + 1));
    diceMap.set(rollDice, diceMap.get(rollDice) + 1);
    for (let key of diceMap.keys()) {
        if (diceMap.get(key) == 10) {
            limitFlag = false;
            console.log("\n The maximum time repeated number is : " + key);
        }
    }
}

min = 10;
for (let key of diceMap.keys()) {
    if (diceMap.get(key) < min) {
        min = diceMap.get(key)
        var min_key = key
    }
}
console.log(" The minimum time repeated number is : " + min_key);
console.log()
console.log(diceMap);
console.log();