let a = 10,
  b = 12,
  c = 5;

if (a < b + c && b < a + c && c < a + b) {
  console.log("yes");
} else {
  console.log("no");
}
