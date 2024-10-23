"use strict";

function calculate(n) {
  console.group(`Calculate for , ${n} `);
  if (n > 0) {
    const r = calculate(n - 1);
    console.log(`Returned required recursion , ${r} `);
    console.groupEnd();
    return r;
  } else {
    console.log(`Returned 1`);
    console.groupEnd();
    return 1;
  }
}

console.log(calculate(5));
