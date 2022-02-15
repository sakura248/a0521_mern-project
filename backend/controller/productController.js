const asyncHandler = require("express-async-handler");

// @description Get products
// @route GET /api/products
// @access Private
const getProducts = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "get product" });
});

// @description set product
// @route POST /api/products
// @access Private
const setProduct = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text field");
  }
  res.status(200).json({ message: "set product" });
});

// @description Update products
// @route PUT /api/products/:id
// @access Private
const updateProduct = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `update product ${req.params.id}` });
});

// @description Delete products
// @route Delete /api/products/:id
// @access Private
const deleteProduct = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete product ${req.params.id}` });
});

module.exports = {
  getProducts,
  setProduct,
  updateProduct,
  deleteProduct,
};
