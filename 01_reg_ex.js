const fun = `function nthFibonacciTerm(n) {
  let previousTerm = 0;
  let currentTerm = 1;

  for (let term = 1; term < n; term++) {
    const nextTerm = previousTerm + currentTerm;
    previousTerm = currentTerm;
    currentTerm = nextTerm;
  }

  return previousTerm;
}
function factorial(number) {
  let product = 1;
  for (let multiplier = 2; multiplier <= number; multiplier++) {
    product = product * multiplier;
  }
  return product;
}
function testFactorial(number, expected) {
  const a = "this is my function abc";
  const actual = factorial(number);
  console.log(isPassed(expected, actual), makeMessage(number, expected, actual));
}`;

const funLines = fun
  .split("\n")
  .filter((line) => line.match(/^function \w+\(/));
// console.log(funLines);
// console.log(funLines.map((line) => line.match(/\s+\w+/)[0].trim()));

console.log(funLines.map((line) => line.match(/\s\w+/)[0].trim()));
