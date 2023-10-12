function isPalindrome(string) {
  // Start coding here

  let newString = string.split("").reverse().join("");

  return string === newString;
}

//Example case
console.log(isPalindrome("reviver")); // true
console.log(isPalindrome("บวบ")); // true
console.log(isPalindrome("deliver")); // false
