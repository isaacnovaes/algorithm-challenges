# Unique string algorithm

There is an array of strings. All strings contains similar letters except one. Try to find it!

Example

```js
findUniq(['Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a' ]), // 'BbBb'
findUniq(['abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba' ]), // 'foo'
findUniq(['silvia', 'vasili', 'victor' ]), // 'victor')
findUniq(['Tom Marvolo Riddle', 'I am Lord Voldemort', 'Harry Potter' ]), // 'Harry Potter'
findUniq(['    ', 'a', ' ' ]), // 'a'
```

Strings may contain spaces. Spaces is not significant, only non-spaces symbols matters. E.g. string that contains only spaces is like empty string.

It’s guaranteed that array contains more than 3 strings.
