import React, { useState } from "react";
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

  const [sentForm, setSentForm] = useState(false);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        mt: 12,
      }}
    >
      {/* <h2>Your Skincare Products</h2> */}
      <ProductForm setSentForm={setSentForm} />
      <Product handleOnChange={handleOnChange} sentForm={sentForm} setSentForm={setSentForm} />
    </Box>
  );
}

export default Products;
