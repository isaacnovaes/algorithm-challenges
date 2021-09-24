# RegEx password validation

You need to write regex that will validate a password to make sure it meets the following criteria:

- at least six characters long
- contains a lowercase letter
- contains an uppercase letter
- contains a number
  
Valid passwords will only be **alphanumeric characters**.

## My learning

It was really cool to finish this challenge, because I learned a smart way of using a positive lookahead assertion. This way is useful to make sure that a patter has a certain amount of character(s). For example:

```js
/^(?=.*[a-z])\w{5}$/
```

This patter matches a 5-word input that has at least one lowercase letter
