function Product(n, p, d) {
  this.name = n;
  this.price = p;
  this.desc = d;

  function display  () {
    console.log(this);
  };
}

const iphone = new Product(
  "iphone14",
  120000,
  "the new model i phone released"
);

console.log(iphone);

const mac = new Product("macbook",150000,"this is latest m2 macbook");

console.log(mac);
