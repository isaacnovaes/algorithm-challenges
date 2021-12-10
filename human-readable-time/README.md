# Human readable time algorithm

Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits,   range: 00 - 99

MM = minutes, padded to 2 digits, range: 00 - 59

SS = seconds, padded to 2 digits, range: 00 - 59

**_The maximum time never exceeds 359999 (99:59:59)_**

Examples:

```js
humanReadable(0)        ->   "00:00:00"
humanReadable(59)       ->   "00:00:59" 
humanReadable(60)       ->   "00:01:00" 
humanReadable(90)       ->   "00:01:30" 
humanReadable(3599)     ->   "00:59:59" 
humanReadable(3600)     ->   "01:00:00" 
humanReadable(45296)    ->   "12:34:56"
humanReadable(86399)    ->   "23:59:59"
humanReadable(86400)    ->   "24:00:00"
humanReadable(359999)   ->   "99:59:59"
```
