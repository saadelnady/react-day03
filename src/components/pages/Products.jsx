import React, { useState, useEffect } from "react";

import Card from "react-bootstrap/Card";
import { NavLink } from "react-router-dom";
import {
  deleteProduct,
  getAllProducts,
  editProduct,
} from "../../Api/productsApi";

export const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(getAllProducts());
  }, []);

  const deleteAction = (productId) => {
    deleteProduct(productId);

    setProducts(products.filter((product) => product.id != productId));

    console.log(products);
  };

  const handleEditProduct = (productId, updatedProductData) => {
    const updatedProduct = editProduct(productId, updatedProductData);
    if (updatedProduct) {
      // Update the product in the component's state
      setProducts((prevProducts) =>
        prevProducts.map((product) =>
          product.id === productId ? updatedProduct : product
        )
      );
    }
  };
  return (
    <>
      <div className="container py-5">
        <div className="row justify-content-between gap-5">
          {products.map((product) => (
            <Card style={{ width: "18rem", padding: "0" }} key={product.id}>
              <img
                src={product.src}
                alt=""
                style={{
                  width: "300px",
                  maxWidth: "100%",
                  height: "150px",
                }}
              />
              <Card.Body>
                <Card.Title>{product.productName}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  price: {product.price}$
                </Card.Subtitle>
                {product.quantity > 1 && (
                  <Card.Subtitle className="mb-2 text-muted">
                    Quantity : {product.quantity}
                  </Card.Subtitle>
                )}
                {product.quantity === 1 && (
                  <p className="py-2 px-3 bg-warning text-light rounded">
                    there is only one product
                  </p>
                )}
                {product.quantity === 0 && (
                  <p className="py-2 px-3 bg-danger text-light rounded">
                    sold out
                  </p>
                )}
                <NavLink
                  className=" btn btn-outline-primary mb-2"
                  to={`/productdetails/${product.id}`}
                >
                  product info
                </NavLink>

                <NavLink
                  className=" btn btn-outline-warning mb-2"
                  to={`/product/${product.id}/edit`}
                  onClick={() => {
                    // Pass the product data to editProduct
                    handleEditProduct(product.id, product);
                  }}
                >
                  Edit product
                </NavLink>
                <button
                  className=" btn btn-outline-danger mb-2"
                  onClick={() => {
                    deleteAction(product.id);
                  }}
                >
                  Remove product
                </button>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
};
