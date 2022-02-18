import React from "react";
import Product from "../components/Product";
import ProductForm from "../components/ProductForm";
import {
  List,
  ListItem,
  ListItemText,
  IconButton,
  Box,
  Typography,
} from "@mui/material";

function Products() {
  const handleOnChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      {/* <h2>Your Skincare Products</h2> */}
      <ProductForm />
      <Product handleOnChange={handleOnChange} />
    </Box>
  );
}

export default Products;
