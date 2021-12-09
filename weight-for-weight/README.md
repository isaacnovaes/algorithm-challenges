# Weight for Weight algorithm

My friend John and I are members of the "Fat to Fit Club (FFC)". John is worried because each month a list with the weights of members is published and each month he is the last on the list which means he is the heaviest.

I am the one who establishes the list so I told him: "Don't worry any more, I will modify the order of the list". It was decided to attribute a "weight" to numbers. The weight of a number will be from now on the sum of its digits.

For example 99 will have "weight" 18, 100 will have "weight" 1 so in the list 100 will come before 99.

Given a string with the weights of FFC members in normal order can you give this string ordered by "weights" of these numbers?

Example:

```js
"56 65 74 100 99 68 86 180 90" -> "100 180 90 56 65 74 68 86 99" 
"379002 119 395587 50 224729 40 461996 117 30438 145 410885 66 393789 59 137631 141 333495 69 73562 14 75" -> "40 40 14 14 50 50 141 141 117 117 145 145 119 119 66 66 75 59 59 69 69 30438 30438 137631 137631 379002 73562 73562 224729 224729 410885 410885 333495 333495 75379002 461996 461996 395587 395587 393789 393789"
```

When two numbers have the same "weight", let us class them as if they were strings (alphabetical ordering) and not numbers:

```js
180 is before 90 since, having the same "weight" (9), it comes before as a string.
```

All numbers in the list are positive numbers and the list can be empty.

Notes
it may happen that the input string have leading, trailing whitespaces and more than a unique whitespace between two consecutive numbers
