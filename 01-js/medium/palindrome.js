/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a Palindrome as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  const reversedStr = cleanedStr.split('').reverse().join('');
  
  if (cleanedStr !== reversedStr) {
    return false;
  }
  console.log("Original String:", str);
  console.log("Cleaned String:", cleanedStr);
  console.log("Reversed String:", reversedStr);
  return true;
}

module.exports = isPalindrome;
