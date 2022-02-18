const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    product: {
      type: String,
      required: [true, "Please add a text"],
    },
    timeframe: {
      type: String,
      required: [false, "Please choose when to use"],
    },
    // concerns: {
    //   type: String,
    //   required: [true, "Please add a text"],
    // },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Product", productSchema);
