import Stack from "./stack.js";

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);

console.log("Top element:", stack.peek()); // Output: Top element: 3
console.log("Stack size:", stack.size()); // Output: Stack size: 3
console.log("Popped element:", stack.pop()); // Output: Popped element: 3
console.log("Stack size after pop:", stack.size()); // Output: Stack size after pop: 2
console.log("Element at index 0:", stack.get(0)); // Output: Element at index 0: 2
console.log("Element at index 1:", stack.get(1)); // Output: Element at index 1: 1
stack.dumpList();
