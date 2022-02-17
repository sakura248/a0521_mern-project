import React, { useEffect } from "react";

function Product() {
  useEffect(() => {
    async function fetch() {
      await console.log("hoge");
    }
    fetch();
  }, []);
  return <div>Product</div>;
}

export default Product;
