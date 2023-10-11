import React, { useState } from "react";
import { CartCounterContext } from "./CartCounterContext";

export const CartCounterProvider = (props) => {
  let [count, setCount] = useState(0);
  let [cart, setCart] = useState([]);

  let increase = () => {
    setCount(count + 1);
  };
  let decrease = () => {
    setCount(count - 1);
  };

  let addToCart = (product) => {
    setCart((prevCart) => {
      // Use the previous cart state to create the new cart array
      let newCart = [...prevCart, product];
      console.log(newCart);
      return newCart;
    });
  };

  let removeFromCart = (id) => {
    setCart(cart.filter((product) => product.id !== id));
  };
  // Function to handle removing an item from the cart

  let data = {
    count,
    cart,
    increase,
    decrease,
    addToCart,
    removeFromCart,
  };

  return (
    <CartCounterContext.Provider value={data}>
      {props.children}
    </CartCounterContext.Provider>
  );
};
