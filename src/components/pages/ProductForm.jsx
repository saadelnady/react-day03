import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { addProduct, editProduct, getProductById } from "../../Api/productsApi";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const ProductForm = () => {
  let { id } = useParams();
  id = parseInt(id) || 0;

  const navigate = useNavigate();

  const [productData, setProductData] = useState({
    id: null, // You can generate a unique ID here or use some other logic
    src: "",
    productName: "",
    price: "",
    quantity: "",
  });

  useEffect(() => {
    if (id != 0) {
      const product = getProductById(id);

      if (product) {
        setProductData(product);
      }
    }
  }, [id]);

  const handleInputChange = (e) => {
    setProductData({
      ...productData,

      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id != 0) {
      editProduct(id, productData);
    } else {
      addProduct(productData);
      productData.id += 15;
    }

    navigate("/");
  };
  return (
    <div className="container bg-light  min-vh-100">
      <Form className="py-5 w-100" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>product image</Form.Label>
          <Form.Control
            type="text"
            name="src"
            value={productData.src}
            onChange={handleInputChange}
            placeholder="enter product image "
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>product name</Form.Label>
          <Form.Control
            type="text"
            name="productName"
            value={productData.productName}
            onChange={handleInputChange}
            placeholder="enter product name "
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>product price</Form.Label>
          <Form.Control
            type="text"
            name="price"
            value={productData.price}
            onChange={handleInputChange}
            placeholder="enter product price "
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>product quantity</Form.Label>
          <Form.Control
            type="text"
            name="quantity"
            value={productData.quantity}
            onChange={handleInputChange}
            placeholder="enter product quantity "
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};
