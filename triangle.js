let a = 10;
let b = 9;
let c = 8;

if (a == b && b == c && c == a) {
  console.log("the given triangle is a equilateral");
} else if (a != b && b != c && c != a) {
  console.log("the given triangle is a isosceles");
} else if (a == b || b == c || c == a) {
  console.log("the given triangle is a scalene");
}
