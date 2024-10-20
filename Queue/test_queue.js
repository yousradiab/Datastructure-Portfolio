import Queue from "./queue.js";

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);

console.log("size", queue.size()); // 5
console.log("dumpList", queue.dumpList()); // 1 2 3 4 5

console.log("get 0", queue.get(0)); // 1
console.log("get 1", queue.get(1)); // 2

console.log("peek", queue.peek()); // 1

console.log("dequeue", queue.dequeue()); // 1

console.log("dumpList", queue.dumpList()); // 2 3 4 5
