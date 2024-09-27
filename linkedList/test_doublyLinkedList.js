import doublyLinkedList from "./doublyLinkedList.js"; // Importer klassen

// Opret en ny instans af DoublyLinkedList
const list = new doublyLinkedList();

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

// ========================================
// Test af addFirst og addLast
// ========================================
console.log("Tilføjer elementer til slutningen af listen:");
list.addLast("C");
list.addLast("A");
list.addLast("T");
list.dumpList();

console.log("\nTilføjer elementer til begyndelsen af listen:");
list.clear();
list.addFirst("T");
list.addFirst("A");
list.addFirst("C");
list.dumpList();

console.log("\nTester størrelsen af listen:");
console.log(`Antal noder i listen: ${list.size()}`);

console.log("\nTester clear() metoden:");
list.clear();
console.log(`Antal noder i listen efter clear: ${list.size()}`);

// ========================================
// Test af removeFirst og removeLast
// ========================================

list.clear();
list.addLast("C");
list.addLast("A");
list.addLast("T");
console.log("\nFør fjernelse:");
list.addLast(list.removeLast());
list.dumpList();

console.log("\nFjern første element:", list.removeFirst()); // Forventet output: C
list.dumpList(); // Forventet output: A, T

console.log("\nFjern sidste element:", list.removeLast()); // Forventet output: T
list.dumpList(); // Forventet output: A

// ========================================
// Test af removeNode
// ========================================

list.clear();
list.addLast("C");
list.addLast("A");
list.addLast("R");
list.addLast("T");
console.log("\nFør fjernelse:");
list.dumpList(); // Forventet output: C, A, R, T

const nodeToRemove = list.head.next; // Node med data A
console.log("\nFjerner node med data:", nodeToRemove.data);
list.removeNode(nodeToRemove);
list.dumpList(); // Forventet output: C, R, T

// ========================================
// Test af insertBeforeNode & insertAfterNode
// ========================================

list.clear();
list.addLast("C");
list.addLast("A");
list.addLast("T");
console.log("\nFør indsættelse:");
list.dumpList(); // Forventet output: C, A, T

const newNode = new Node("R");
list.insertAfterNode(newNode, list.head.next); // Indsæt R efter node med data A
console.log("\nEfter indsættelse af R efter A:");
list.dumpList(); // Forventet output: C, A, R, T

const newNode2 = new Node("E");
list.insertBeforeNode(newNode2, list.head.next); // Indsæt E før node med data A
console.log("\nEfter indsættelse af E før A:");
list.dumpList(); // Forventet output: C, E, A, R, T

// ========================================
// Test af swapNodes
// ========================================

list.clear();
list.addLast("C");
list.addLast("A");
list.addLast("R");
list.addLast("T");

console.log("\nFør bytte:");
list.dumpList(); // Forventet output: C, A, R, T

const node1 = list.head; // Node med data C
const node2 = list.head.next.next; // Node med data R

list.swapNodes(node1, node2); // Byt node C og node R

console.log("\nEfter bytte af 10 og 30:");
list.dumpList(); // Forventet output: R, A, C, T

// ========================================
// Test af nodeAt
// ========================================

list.clear();
list.addLast("C");
list.addLast("A");
list.addLast("R");
list.addLast("T");
list.addLast("S");

console.log("\nTest af nodeAt(2):");
const node3 = list.nodeAt(2);
console.log(node3 ? node3.data : "Noden blev ikke fundet"); // Forventet output: R

console.log("\nTest af nodeAt(5):");
const node4 = list.nodeAt(5);
console.log(node4 ? node4.data : "Noden blev ikke fundet"); // Forventet output: "Noden blev ikke fundet"

// ========================================
// Test af get(index) og indexOf(data)
// ========================================

list.clear();
list.addLast("C");
list.addLast("A");
list.addLast("R");
list.addLast("T");
list.addLast("S");

// Test get(index)
console.log("Element ved indeks 2:", list.get(2)); // Forventet output: R
console.log("Element ved indeks 5:", list.get(5)); // Forventet output: null (ude af rækkevidde)

// Test indexOf(data)
console.log("Indeks for element R:", list.indexOf("R")); // Forventet output: 2
console.log("Indeks for element H:", list.indexOf("H")); // Forventet output: -1 (ikke fundet)

// ========================================
// Test af insertAfter og insertBefore
// ========================================

list.clear();
list.addLast("C");
list.addLast("A");
list.addLast("R");
list.addLast("T");
list.addLast("S");

console.log("\nFør indsættelse:");
list.dumpList(); // Forventet output: C, A, R, T, S

// Test insertAt
list.insertAfter(2, "E");
console.log("\nEfter indsættelse af E ved index 2:");
list.dumpList(); // Forventet output: C, A, R, E, T, S

// Test insertBefore
list.insertBefore(2, "D");
console.log("\nEfter indsættelse af D før indeks 2:");
list.dumpList(); // Forventet output: C, A, D, R, E, T, S

// ========================================
// Test af remove(data) og removeIndex(index)
// ========================================

list.clear();
list.addLast("C");
list.addLast("A");
list.addLast("R");
list.addLast("T");
list.addLast("S");

console.log("\nFør fjernelse:");
list.dumpList(); // Forventet output: C, A, R, T, S

// Test remove(data)
console.log("\nFjerner R:");
list.remove("R");
list.dumpList(); // Forventet output: C, A, T, S

// Test removeIndex(index)
console.log("\nFjerner element på indeks 1:");
list.removeIndex(1);
list.dumpList(); // Forventet output: C, T, S

// ========================================
// Test af first og last
// ========================================

list.clear();
list.addLast("C");
list.addLast("A");
list.addLast("R");
list.addLast("T");
list.addLast("S");

console.log("\nHele listen:");
list.dumpList(); // Forventet output: C, A, R, T, S

console.log("Første element i listen:", list.first()); // Forventet output: C
console.log("Sidste element i listen:", list.last()); // Forventet output: S

list.clear(); // Fjern alle elementer fra listen

console.log("Efter clear - første element:", list.first()); // Forventet output: null
console.log("Efter clear - sidste element:", list.last()); // Forventet output: null
