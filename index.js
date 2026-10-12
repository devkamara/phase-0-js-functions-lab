let amount;
let num1;
let num2;
let word;


function calculateTax (amount) {
    const tax = amount * 0.1;
    return tax;
}

function findMaximum (num1, num2) {
    return Math.max(num1, num2);
}

function isPalindrome ('word') {




// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };