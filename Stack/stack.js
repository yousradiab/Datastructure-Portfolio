class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

export default class Stack {
  constructor() {
    this.tail = null;
    this.count = 0;
  }

  push(data) {
    const newNode = new Node(data);
    newNode.next = this.tail;
    this.tail = newNode;
    this.count++;
  }

  pop() {
    if (this.tail === null) {
      throw new Error("Stack is empty");
    }
    const poppedData = this.tail.data; // Gemmer data fra den øverste node
    this.tail = this.tail.next; // Opdaterer tail til den næste node
    this.count--; // Opdaterer tælleren
    return poppedData; // Returnerer dataen
  }

  peek() {
    if (this.tail === null) {
      throw new Error("Stack is empty");
    }

    return this.tail.data;
  }

  size() {
    return this.count;
  }

  get(index) {
    if (index < 0 || index >= this.count) {
      // Kontrollerer om indekset er gyldigt
      throw new Error("Index out of bounds");
    }
    let current = this.tail; // Starter fra den øverste node
    for (let i = 0; i < index; i++) {
      // Loop indtil den ønskede indeks
      current = current.next; // Flytter til næste node
    }
    return current.data; // Returnerer data fra den fundne node
  }
}
