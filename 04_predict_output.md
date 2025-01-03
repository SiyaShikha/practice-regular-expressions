### **Type 1: Explanation**

1. What does the expression `"cat, bat, rat".match(/b\w+/)` do?
   Output : "bat"
   ("b" followed by one or more occurrence of word)

2. What will `"123-456-7890".match(/\d{3}/)` return?
   Output : "123"
   (exact 3 digit)

3. What does `"hello\nworld".match(/.\n./)` return?
   output : "o\nw"
   (any char followed by "\n" followed by any char)

4. What will `"name@example.com".match(/\w+@\w+\.\w+/)` return?
   Output : "name@example.com"
   (one or more occurrence of word followed by "@" followed by one or more occurrence of word followed by "." followed by one or more occurrence of word)

5. What does `"file.txt".match(/\.txt/)` do?
   Output : ".txt"

6. What does `"red green blue".match(/green/)` do?
   Output : "green"

7. What will `"abcdef".match(/[a-c]/)` return?
8. What does `"The quick brown fox".match(/q.+?k/)` return?
   Output : "quick"
   ("q" followed by one or more occurrence of random char followed by "k")

   Use of ? : `"The quick peacock brown fox".match(/q.+?k/)`
   Output : "quick" not "quick peacock" due to ?
   (stops at the first match. Resists the greedy match)

9. What does `"apple".match(/a[a-z]+/)` return?
   Output : "apple"

10. What will `"a1b2c3".match(/\d+/)` return?
    Output : "1"

11. What does `"good food mood".match(/o+o/)` do?
    Output : "oo"

12. What does `"@username".match(/@\w+/)` return?
    Output : "@username"

13. What does `"path/to/file".match(/\/to\//)` do?
    Output : "/to/"

14. What does `"1.23".match(/\d\.\d+/)` return?
    Output : "1.23"

15. What will `"AB123CD".match(/[A-Z]+\d+/)` return?
    Output : "AB123"

16. What does `"hello_world".match(/\w+_\w+/)` return?
    Output : "hello_world"

17. What does `"123abc456".match(/\d{3}/)` return?
    Output : "123"

18. What does `"My name is John".match(/name\s\w+/)` return?
    Output : "name is"

19. What will `"https://example.com".match(/https?:\/\/\w+\.\w+/)` return?
    Output : "https://example.com"

20. What does `"abcdEFGH".match(/[A-Z]+/)` return?
    Output : "EFGH"

21. What does `"abc123".match(/(\w)(\d)/)` return?
    Output : "c1", "c", "1"

22. What will `"hello world".match(/(\w+)\s(\w+)/)` return?
    Output : "hello world", "hello", "world"

23. What does `"1234".match(/\d{2,3}/)` return?
    Output : "123"

24. What will `"aaaabbb".match(/a{2,}/)` return?
    Output : "aaaa"

25. What does `"hello".match(/[aeiou]{2}/)` return?
    Output : null

26. What does `"ABCD1234".match(/[A-Z]+\d+/)` return?
    Output : "ABCD1234"

27. What does `"file_name.ext".match(/(\w+)\.(\w+)/)` return?
    Output : "file_name.ext", "file_name", "ext"

28. What does `"Mississippi".match(/s{2,}/)` return?
    Output : "ss"

29. What will `"hello world".match(/(\w)(?=\s\w)/)` return?
    Output : "o"
    `"hello world".match(/(\w)(?!\s\w)/)`
    Output : "h"
    ("?=" checks pattern ahead and "?!" checks negation of pattern ahead)
    ("?<=" checks pattern behind and "?<!" checks negation of pattern behind)

30. What does `"2025-01-01".match(/\d{4}-(\d{2})-(\d{2})/)[2]` return?
    Output : "01"

31. What does `"abc123".match(/(\d+)(\w+)/)` return?
    Output : "123", "12", "3"

32. What does `"hello123".match(/\D+/)` return?
    Output : "hello"
    (\D is class of not a digit)

33. What will `"yes no maybe".match(/(\w+)\s(\w+)\s(\w+)/)` return?
    Output : "yes no maybe", "yes", "no", "maybe"

34. What does `"color: #123456".match(/#[0-9a-fA-F]{6}/)` return?
    Output : "#123456"

35. What does `"aaa111bbb222".match(/([a-z]+)(\d+)/)` return?
    Output : "aaa111", "aaa", "111"

36. What will `"1,234.56".match(/\d{1,3}(,\d{3})*\.\d{2}/)` return?
    Output : "1,234.56", ",234"

37. What does `"aabbcc".match(/a(b{2})c/)` return?
    Output : "abbc" , "bb"

38. What does `"xyzz".match(/x(y(z))/)` return?
    Output : "xyz", "yz", "z"

39. What does `"abab".match(/(ab)\1/)` return?
    Output : "abab", "ab"

40. What will `"abc123abc".match(/(abc)\d+\1/)` return?
    Output : "abc123abc", "abc"
