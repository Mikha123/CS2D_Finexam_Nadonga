let word1 = prompt("Enter the first word:");
let word2 = prompt("Enter the second word:");

// Log to the console the original strings and the reversed strings
console.log("Original word 1:", word1);
console.log("Reversed word 1:", word1.split("").reverse().join(""));
console.log("Original word 2:", word2);
console.log("Reversed word 2:", word2.split("").reverse().join(""));


// Log to the console by returning the truth value if the original string is equivalent to the reversed string.
console.log("Is word 1 a palindrome?", word1 === word1.split("").reverse().join(""));
console.log("Is word 2 a palindrome?", word2 === word2.split("").reverse().join(""));