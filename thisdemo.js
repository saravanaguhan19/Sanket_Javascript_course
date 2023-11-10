class Product {
  name;
  price;
  desc;

  constructor(n, p, d) {
    this.name = n;
    this.price = p;
    this.desc = d;
  }

  display() {
    console.log(this);
  }
}

const iphone = new Product("iphone14", 120000, "the latest released i phone");

console.log(iphone);

iphone.display();

