// let arr = [1, 2];

// [a, b] = arr;

// console.log(a); // 1
// console.log(b); // 2

// let first, last;

// [first, last] = "Baby Wolf".split(' ');

// console.log(first); // Baby
// console.log(last);  // Wolf

// let obj = {
//     name: 'Vishal',
//     age: 21,
// };

// for (let [key, value] of Object.entries(obj)) {
//     console.log(key, value);
// }

// // name Vishal
// // age 21

// let a = 1, b = 2;

// [b, a] = [a, b]

// console.log(a); // 2
// console.log(b); // 1


let arr = [1, 2, 3, 4, 5];

let [first, ...rest] = arr;

console.log(first); // 1
console.log(rest); // [2, 3, 4, 5]