export default class Queue {
  head = null;
  tail = null;

  // ========================================
  // metoder der behandler data objekter
  // ========================================

  // tilføjer et element til slutningen af listen
  enqueue(data) {
    const newNode = new Node(data);
    if (this.tail === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  // returnerer elementet på plads nummer index
  get(index) {
    const node = this.nodeAt(index);
    if (node === null) {
      return null;
    }
    return node.data;
  }

  // returnerer det første element i listen
  peek() {
    if (this.head === null) {
      return null;
    }
    return this.head.data;
  }

  // fjerner det første element i listen - og returnerer elementet
  dequeue() {
    if (this.head === null) return null;

    const removedNode = this.head;

    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
    }

    return removedNode.data;
  }

  // ========================================
  // metoder til at operere direkte på nodes
  // ========================================

  // returnerer noden på plads nummer index
  nodeAt(index) {
    let current = this.head;
    let count = 0;
    while (current !== null) {
      if (count === index) {
        return current;
      }
      count++;
      current = current.next;
    }
    return null;
  }

  // ========================================
  // metoder der omhandler hele listen
  // ========================================

  // der returnerer antallet af nodes i listen
  size() {
    let count = 0;
    let current = this.head;
    while (current !== null) {
      count++;
      current = current.next;
    }
    return count;
  }

  // ========================================
  // Udvikling, testing og debugging
  // ========================================

  // der console.log'er alle data-elementer i listen
  dumpList() {
    let current = this.head;
    while (current !== null) {
      console.log(current.data);
      current = current.next;
    }
  }
}

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
