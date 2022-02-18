import React from "react";
import Product from "../components/Product";
import ProductForm from "../components/ProductForm";
import { DragDropContext } from "react-beautiful-dnd";

function Products() {
  const handleOnChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <div>
      {/* <h2>Your Skincare Products</h2> */}
      <ProductForm />
      <Product handleOnChange={handleOnChange} />
    </div>
  );
}

export default Products;
