let a = "abc";
let b = new String("abc");
let c = String("abc");

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
// == do type conversion if both type are not same
console.log(a == b);
console.log(b == c);
console.log(c == a);
// === do not do type conversion 
console.log(a === b);
console.log(b === c);
console.log(c === a);
