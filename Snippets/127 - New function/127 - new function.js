function add(a, b) {
    return a + b;
}

let add = new Function('a', 'b', 'return a+b;');

console.log(add(1, 2));
// 3