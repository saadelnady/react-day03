import { Route, Routes } from "react-router-dom";
import "./App.css";

import { MyHeader } from "./components/MyHeader";

import {
  Products,
  ProductForm,
  MyCart,
  ProductDetails,
  NotFound,
} from "./components/pages";
function App() {
  return (
    <>
      <MyHeader />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/mycart" element={<MyCart />} />
        <Route path="/productdetails/:id" element={<ProductDetails />} />
        <Route path="/product/:id/edit" element={<ProductForm />} />
        <Route path="/product/0/edit" element={<ProductForm />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
