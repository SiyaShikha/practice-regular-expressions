// 1. Match any string that contains a number.
console.log(/\d/.test("abc123def"));

// 2. Find all lowercase letters in a string.
console.log("abcDEFghi".match(/[^A-Z]/g));

// 3. Match a string that ends with "ed".
console.log(/ed$/.test("passed"));

// 4. Match the word "yes" in a string.
console.log("no, yes, maybe".match(/yes/));

// 5. Find any two consecutive vowels in a string.
console.log("aEiOu".match(/[aeiou]{2}/i));

// 6. Match any string containing the word "hello".
console.log(/hello/.test("hi hello world"));

// 7. Find a string that contains exactly two spaces.
console.log(/^\S*(\s\S*){2}$/.test("This is cool"));

// 8. Find a string that starts with "abc".
console.log(/^abc/.test("abcdef"));

// 9. Match any string that contains the digit `7`.
console.log(/7/.test("abc567def"));

// 10. Find all occurrences of the letter `e`.
console.log("elephant".match(/e/g));

// 11. Match a string that has at least one uppercase letter.
console.log(/[A-Z]/.test("This is Cool"));

// 12. Find a string with a period (`.`) in it.
console.log(/\./.test("Life is Beautiful."));

// 13. Match a string that contains a single space.
console.log(/^\S*\s\S*$/.test("hello world"));

// 14. Match all words that start with the letter `c`.
console.log(/^c/.test("cat"));

// 15. Match a string that contains the sequence "123".
console.log(/123/.test("abc123"));

// 16. Match a string that contains a forward slash (`/`).
console.log(/\//.test("this/that"));

// 17. Find all strings that contain "and".
console.log(/and/.test("hand"));

// 18. Match a string that starts and ends with the same letter.
console.log(/^(.).*\1$/.test("eye"));

// 19. Match all lowercase letters except "x" and "y".
console.log("abcxyz".match(/[^xy]/g));

// 20. Find all words in a string that are exactly 5 letters long.
console.log("fruit: apple, banana, mango".match(/(?<!\w)(\w{5})(?!\w)/g));

// 21. Match all words starting with a vowel.
console.log("head, eyes, hands, ears, a".match(/(?<!\w)[aeiou]\w*/g));

// 22. Find all sequences of two or more consecutive digits.
console.log("abc123def4567ghi89".match(/\d{2,}/g));

// 23. Match all words that contain exactly three letters.
console.log("toy, doll, boy, girl".match(/(?<!\w)\w{3}(?!\w)/g));

// 24. Find all occurrences of the word "cat" or "dog".
console.log("cat dog acata adog".match(/cat|dog/g));

// 25. Capture the first and last name from a string like `"John Doe"`.
console.log("John Doe".match(/(\w+)\s(\w+)/));

// 26. Match strings with repeating characters (e.g., `"aa"`, `"bb"`).
console.log(/(.)\1/.test("cool"));

// 27. Extract all the hashtags from a tweet.
console.log("#NEWS of the #Day".match(/#\w+/g));
console.log("#NEWS of the #Day".match(/(?<=#)(\w+)/g));

// 28. Validate a 24-hour time format like `"23:59"`.
console.log(/^([01][0-9]|2[0-3]):([0-5][0-9])$/.test("23:59"));

// 29. Capture the area code and phone number from `(123) 456-7890`.
console.log("(123) 456-7890".match(/\((\d{3})\)\s(\d{3}-\d{4})/));

// 30. Find sequences of whitespace followed by a word.
console.log("a ab abc abcd".match(/\s\w+/g));

// 31. Match strings containing at least one uppercase and one digit.
console.log(/([A-Z].*\d|\d.*[A-Z])/.test("she scored A1 grade."));

// 32. Find all non-alphanumeric characters in a string.
console.log("abc de_fgh/ij~kl".match(/\W|_/g));

// 33. Match email addresses.
console.log(/^[\w.-]+@\w+\.[a-z]{2,6}$/.test("shikha.singh09@gmail.com"));

// 34. Validate dates in the format `YYYY-MM-DD`.
console.log(/^\d{4}-(0[1-9]|1[012])-([012][1-9]|[123][0])$/.test("2025-01-03"));

// 35. Extract the filename and extension from a path like `/path/to/file.txt`.
console.log("/path/to/file.txt".match(/(\w+)\.(\w+)$/));

// 36. Find all duplicate words in a sentence.
console.log("apple mango apple mango".match(/\b(\w+)\b(?=.*\1)/g));

// 37. Match words that do not contain the letter "e".
console.log(/^[^e]+$/.test("mango"));

// 38. Extract the domain name from a URL like `https://www.example.com`.
console.log("https://www.example.com".match(/.\w+.\w+$/));

// 39. Match strings containing three consecutive vowels.
console.log(/[aeiou]{3}/.test("coool"));

// 40. Find all 4-letter palindromes in a string.
console.log("abba, abcba, abcd, cddc".match(/(?<!\w)(\w)(\w)\2\1(?!\w)/g));
