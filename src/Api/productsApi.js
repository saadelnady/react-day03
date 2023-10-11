import { ProductsList } from "../components/models/ProductsList";

let getAllProducts = () => {
  return ProductsList;
};
let getProductById = (productId) => {
  return ProductsList.find((product) => product.id == productId);
};
let addProduct = (product) => {
  return ProductsList.push(product);
};
let editProduct = (productId, product) => {
  let index = ProductsList.findIndex((product) => product.id == productId);
  ProductsList[index] = product;
  return ProductsList;
};
let deleteProduct = (productId) => {
  return ProductsList.filter((product) => product.id != productId);
};

export {
  getAllProducts,
  getProductById,
  addProduct,
  editProduct,
  deleteProduct,
};
