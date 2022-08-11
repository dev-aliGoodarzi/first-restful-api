const profile = {
  userId: "user1",
  userName: "ali",
  userFamily: "goudarzi",
};
const products = [
  { id: "product 1", price: 100 },
  { id: "product 2", price: 200 },
  { id: "product 3", price: 300 },
  { id: "product 4", price: 400 },
  { id: "product 5", price: 500 },
];
const cart = [
  {
    productId: "product 3",
    count: 6,
    price: 0,
  },
  {
    productId: "product 4",
    count: 2,
    price: 0,
  },
];

module.exports = {
  profile,
  products,
  cart,
};
