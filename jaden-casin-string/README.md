# Jaden casing string

Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.

Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

--- 

It is a Code Wars challenge. By solving it, I could practise string methods, which are really important and efficient to deal with strings in JS. Also, I have learned a new string method:
``` js
String.fromCharCode(SCIICode, SCIICode, SCIICode, ... )

```
Example:
``` js
console.log(String.fromCharCode(189, 43, 190, 61));
// expected output: "½+¾="
```
This method is a static method which takes SCII code as an integer value and transforms it into a character (when only one argument is provided) or a string (when more than one argument is provided). This static method is useful when dealing with charAt() and charCodeAt() string methods

[Check resource](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode)
