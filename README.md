# Data structures, by hand

School assignments from the elective "Datastrukturer og Algoritmer" (data structures and algorithms) on the Computer Science AP degree at KEA, autumn 2024. The course ran in two halves: first every structure is written from scratch in plain JavaScript, with no library, so the cost of each operation is visible; then the structures are put to use in visualisations and small games. Each folder has the structure, a small test script that prints what it does, and in some cases a page that uses it. The algorithms half lives in [Algoritme-portfolio](https://github.com/yousradiab/Algoritme-portfolio).

| Folder | What is in it |
|---|---|
| `linkedList/` | A singly linked list and a doubly linked list. The doubly linked one has both a data interface (`addFirst`, `get`, `indexOf`, `insertAfter`, `removeIndex`, …) and a node interface (`insertAfterNode`, `removeNode`, `swapNodes`, `nodeAt`), plus the design notes as PDF. |
| `Stack/` | A linked stack (`push`, `pop`, `peek`, `size`) and the start of a reverse Polish notation calculator built on it. |
| `Queue/` | A linked queue (`enqueue`, `dequeue`, `peek`, `nodeAt`, `size`). |
| `GridRunner/` | A snake-style grid game in the browser, from the visualisation half of the course: the body is a queue, the head is enqueued every tick and the tail dequeued. |
| `BinaryTree/` | A binary search tree with `addItem`, height bookkeeping and a text-mode `print()` that draws the tree. |
| `largestsum.js` | A sliding window over an array, as a warm-up in thinking about queues. |
| `calc.js`, `Calculate.java` | Recursion warm-ups. |

## Run

```sh
node linkedList/test_doublyLinkedList.js
node Stack/test_stack.js
node Queue/test_queue.js
```

Open `GridRunner/index.html` or `BinaryTree/index.html` in a browser for the two visual ones. The game is steered with the arrow keys.

## Honest notes

The RPN calculator in `Stack/` is a sketch and not finished. The comments are in Danish, because that was the language of the course.
