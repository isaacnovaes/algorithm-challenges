# Remove the smallest item of an array. No mutation is allowed.

Given an array of integers, remove the smallest value. **Do not mutate the original array/list**. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.

Don't change the order of the elements that are left.

---

The algorithm itself is pretty straightforward. What complicates it is the restriction that prohibits the mutation of the array.

To pass this restriction, I had to use the filter method, instead of the splice method, which mutates the array.

---

It is a Code Wars challenge. By solving it, I could practise array methods, which are really important and efficient to deal with arrays in JS. 