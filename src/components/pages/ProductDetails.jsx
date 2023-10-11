import React, { useContext } from "react";
import { ProductsList } from "../models/ProductsList";
import { NavLink, useParams } from "react-router-dom";
import { CartCounterContext } from "../../context/CartCounterContext";

export const ProductDetails = () => {
  let { id } = useParams();
  id = parseInt(id);
  let targetProduct = ProductsList.find((product) => product.id === id);

  const value = useContext(CartCounterContext);
  const { addToCart } = value;

  // Function to add the target product to the cart
  const handleAddToCart = () => {
    addToCart(targetProduct);
  };

  return (
    <div className="container bg-light">
      <div className="row d-flex justify-content-center align-items-center min-vh-100">
        <img src={targetProduct.src} alt="" className="col-12 col-sm-5" />
        <div className="col-12 col-sm-6">
          <h1>Product Name: {targetProduct.productName}</h1>
          <p className="fs-4">Product Price: {targetProduct.price}</p>
          <p className="fs-4">Product Quantity: {targetProduct.quantity}</p>
          <NavLink
            className="btn btn-dark text-light btn-outline-dark"
            onClick={handleAddToCart} // Call the function to add to cart
            to="/mycart"
          >
            Add to Cart
          </NavLink>
          <NavLink
            className="btn btn-outline-primary mx-2 btn-outline-primary"
            to="/"
          >
            Back to Products
          </NavLink>
        </div>
      </div>
    </div>
  );
};
