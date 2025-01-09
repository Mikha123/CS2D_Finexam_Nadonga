let subArray1 = ["Genevieve", "Juan", "Luna", "Gabriel", "Elise"]; // names
let subArray2 = [24, 65, 21, 5, 9]; // age in numerical value

// Restructure the declared multi-dimensional array above and store in a new multi-dimensional array where each of the sub-array must contain [name, age].
let restructuredArray = [];
for (let i = 0; i < subArray1.length; i++) {
  restructuredArray.push([subArray1[i], subArray2[i]]);
}

// Log to the console the restructured multidimensional array [name, age] per line.
console.log("Restructured array:");
for (let i = 0; i < restructuredArray.length; i++) {
  console.log(restructuredArray[i]);
}