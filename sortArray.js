let numbers = [24, 65, 21, 5, 9, 32, 42, 80, 57];
let names = ["Zenvo", "Erica", "Jordie", "Alicia", "Redon"];

// Merge both arrays into a single array and log it to the console.
let mergedArray = numbers.concat(names);
console.log("Merged array:", mergedArray);

// Sort numbers numerically in reverse and log it to the console.
numbers.sort(function(a, b){return b - a});
console.log("Numbers sorted in reverse:", numbers);

// Sort names alphabetically and log it to the console.
names.sort();
console.log("Names sorted alphabetically:", names);