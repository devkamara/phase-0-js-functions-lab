let amount;
let num1;
let num2;
let word;
let originalPrice;
let discountPercentage;


function calculateTax (amount) {
    const tax = amount * 0.1;
    return tax;
}

function findMaximum (num1, num2) {
    return Math.max(num1, num2);
}

function isPalindrome ('word') {
    const reversedWord = word.split("").Math.reverse().join("");
    if (word === reversedWord) {
        return true;
    }
    else {
        return false;
    }
console.log(isPalindrome('word'));
}

function calculateDiscountedPrice (originalPrice, discountPercentage) {
    if originalPrice 
}

// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };