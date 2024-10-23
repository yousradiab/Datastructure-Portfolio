let result;

function RpnCalculator(expression) {
  const resultStack = [];
  const inputQueue = expression
    .split(" ")
    .map((part) => (isNaN(part) ? part : Number(part)));

  while (inputQueue.length > 0) {
    const part = inputQueue.shift();
    if (isNaN(part)) {
      const operand2 = resultStack.pop();
      const operand1 = resultStack.pop();
      resultStack.push(operation(part, operand1, operand2));
    } else {
      resultStack.push(part);
    }
  }
}

function inputQueue() {}

function operation() {}

expression("2 3 4 * +");
