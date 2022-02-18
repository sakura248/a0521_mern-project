import React, { useState, useContext } from "react";
import { UserContext } from "../context/UserContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

function ProductForm() {
  const [userContext, setUserContext] = useContext(UserContext);
  const [form, setRegister] = useState({
    product: "",
    timeframe: "",
    // password: "",
  });
  const [errorText, setErrorText] = useState("");

  const token = userContext.token;
  const url = process.env.REACT_APP_API_ENDPOINT + "/api/products/";
  const navigate = useNavigate();

  const onChangeProduct = (e) => {
    setRegister({ ...form, product: e.target.value });
  };

  const postProduct = async (token) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      const product = form.product;
      await axios.post(url, { product }, config);
    } catch (err) {
      console.log(err.response);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    postProduct(token);
    setRegister({ ...form, product: "" });
    navigate("/Products");

    // console.log(response);
    // return response.data;
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={onChangeProduct}
          required="required"
          placeholder="Enter product name"
          id="product"
          name="product"
          value={form.product}
        />
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </form>
    </div>
  );
}

export default ProductForm;
