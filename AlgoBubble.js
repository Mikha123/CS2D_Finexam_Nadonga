function bubbleSort(array) {
    const n = array.length;
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < n - 1; i++) {
            if (array[i] > array[i + 1]) {
                // Swap elements
                [array[i], array[i + 1]] = [array[i + 1], array[i]];
                swapped = true;
                console.log(`Swapped ${array[i]} and ${array[i+1]}. Array: ${array}`);
            }
        }
    } while (swapped);
    return array;
}

let numbers = [42, 25, 12, 63, 48, 10, 16, 5, 30, 78];

//Simulate prompt input for demonstration purposes.  In a real application, use prompt() to get user input.

// numbers = [];
// for (let i = 0; i < 10; i++) {
//     let num = parseInt(prompt(`Enter number ${i+1}:`));
//     numbers.push(num);
// }


const sortedArray = bubbleSort(numbers);
console.log("Sorted array:", sortedArray);

