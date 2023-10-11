import React, { useContext } from "react";
import { CartCounterContext } from "../../context/CartCounterContext";
import { NavLink } from "react-router-dom";
import emptycart from "../../images/bg_sadCart.png"; // Correct the import path

export const MyCart = () => {
  const value = useContext(CartCounterContext);
  const { cart, removeFromCart } = value;

  // Function to handle removing an item from the cart
  const handleRemoveFromCart = (id) => {
    removeFromCart(id);
  };

  return (
    <div className="container bg-light p-5">
      {cart.length === 0 ? (
        <div className="container text-center">
          <img className="max-100" src={emptycart} alt="empty-cart" />
        </div>
      ) : (
        <ul className="d-flex row flex-wrap">
          {cart.map((item) => (
            <li key={item.id} className="col-12 col-sm-6 col-md-4 my-5">
              <div>
                <img src={item.src} alt="product-img" className="w-50" />
              </div>
              <div>
                <strong>{item.productName}</strong>
              </div>
              <div>Price: {item.price}</div>
              <div>Quantity: {item.quantity}</div>

              <button
                onClick={() => handleRemoveFromCart(item.id)}
                className="btn btn-danger mx-auto"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}

      <NavLink to="/" className="btn btn-primary d-block mx-auto w-50 ">
        Back to products
      </NavLink>
    </div>
  );
};
