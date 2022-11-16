/*
    Write a program to compute Factors of a number N using prime factorization method.
    Logic -> Traverse till i*i <= N instead of i <= N for efficiency.
    O/P -> Print the prime factors of number N.
    Extend the Prime Factorization Program to store all the Prime Factors of a
    number n into an array and finally display the output.
*/

let primeFactors = [];
const prompt = require("prompt-sync")();
console.log();
let n = parseInt(prompt(" Enter the number : "))

for (i = 2; i * i <= n; i++) {
    while (n % i == 0) {
        primeFactors.push(i);
        n = n / i;
    }
}
if (n != 1) {
    primeFactors.push(n);
}
console.log(" The Prime Factors are : " + primeFactors + "\n");