const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    text: {
      type: String,
      required: [true, "Please add a text"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Product", productSchema);
