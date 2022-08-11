const http = require("http");
const fs = require("fs");

const { profile, products, cart } = require("./api");
const { json } = require("stream/consumers");
const successfulAlerter = (message) => {
  return console.log(message);
};

http
  .createServer((req, res) => {
    if (req.url === "/profile") {
      res.write(JSON.stringify(profile));
      return res.end(() =>
        successfulAlerter("profile Data Successfully Sent To user")
      );
    } else if (req.url === "/products") {
      res.write(JSON.stringify(products));
      return res.end(() =>
        successfulAlerter("products Data Successfully Sent To user")
      );
    } else if (req.url === "/cart") {
      const productIdsAndPrices = products.map((item) => {
        return {
          id: item.id,
          price: item.price,
        };
      });
      const newCart = cart.map((cartItem) => {
        const selecetedIndex = products.findIndex(
          (item) => item.id === cartItem.productId
        );
        return {
          ...cartItem,
          price: cartItem.count * productIdsAndPrices[selecetedIndex].price,
        };
      });
      res.write(JSON.stringify(newCart));
      return res.end(() =>
        successfulAlerter("cartItems Data Successfully Sent To user")
      );
    }
  })
  .listen(2502, () => console.log("server Actived Successfully"));
