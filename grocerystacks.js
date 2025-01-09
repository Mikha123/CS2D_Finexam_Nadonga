const groceryStack = [];
const maxSize = 5;

function peek() {
    if (groceryStack.length === 0) {
        return "Stack is empty";
    }
    return groceryStack[groceryStack.length - 1];
}

function push(item) {
    if (groceryStack.length >= maxSize) {
        console.log("Stack is full");
        return;
    }
    groceryStack.push(item);
    console.log("Stack after push:", groceryStack);
}

function pop() {
    if (groceryStack.length === 0) {
        console.log("Stack is empty");
        return;
    }
    const poppedItem = groceryStack.pop();
    console.log("Popped item:", poppedItem);
    console.log("Stack after pop:", groceryStack);
}

// Example usage with prompt() for user input:

for (let i = 0; i < maxSize; i++) {
    const item = prompt(`Enter grocery item ${i + 1}:`);
    if (item) {
        push(item);
    } else {
        break; // Exit loop if user cancels prompt
    }
}

console.log("Final stack:", groceryStack);
console.log("Top item:", peek());
pop();
pop();


