import React, { useState, useContext } from "react";
import { UserContext } from "../context/UserContext";
import axios from "axios";

function ProductForm() {
  const [userContext, setUserContext] = useContext(UserContext);
  const [form, setRegister] = useState({
    product: "",
    // password: "",
  });
  const [errorText, setErrorText] = useState("");

  const token = userContext.token;
  const url = process.env.REACT_APP_API_ENDPOINT + "/api/products/";

  const onChangeProduct = (e) => {
    setRegister({ ...form, product: e.target.value });
  };
  console.log(form);

  const postProduct = async (token) => {
    console.log(token);
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
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ProductForm;
