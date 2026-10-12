let amount;
let num1;
let num2;
let originalPrice;
let discountPercentage;


function calculateTax (amount) {
    const tax = amount * 0.1;
    return tax;
}

function convertToUpperCase (word) {
    return word.toUpperCase();
}

function findMaximum (num1, num2) {
    return Math.max(num1, num2);
}

function isPalindrome (word) {
    const upperWord = word.toUpperCase();
    const reversedWord = upperWord.split("").reverse().join("");
    if (word === reversedWord) {
        return true;
    }
    else {
        return false;
    }
}
console.log(isPalindrome('racecar'));
console.log(isPalindrome('h'));


function calculateDiscountedPrice (originalPrice, discountPercentage) {
  const discountedPrice = originalPrice - ((discountPercentage / 100) * originalPrice);
  return discountedPrice;
}

// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };