// match consecutive two occurence of same char in a word (exactly two).
const strings1 = ["hello", "world", "cool", "sky", "butter", "coool", "cooool"];
const twoConsecutiveChars = strings1.filter((str) => str.match(/(.)\1/));

console.log(twoConsecutiveChars.filter((str) => !str.match(/(.)\1{2}/)));

// filter strings with even length
const strings2 = ["I", "love", "my", "country"];
const evenLengthStrings = strings2.filter((str) => str.match(/^(.{2})*$/));

console.log(evenLengthStrings);

//find a number is divisible by 3
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 24, 25];

const divBy3 = (num) => {
  return /^(\s{3})*$/.test(" ".repeat(num));
};

console.log(numbers.filter(divBy3));
