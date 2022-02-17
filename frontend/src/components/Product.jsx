import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BsDashSquareDotted } from "react-icons/bs";
import { BiMessageSquareEdit } from "react-icons/bi";

function Product() {
  const [userContext, setUserContext] = useContext(UserContext);
  const [list, setList] = useState([]);
  const token = userContext.token;
  const navigate = useNavigate();

  const [errorText, setErrorText] = useState("");
  const url = process.env.REACT_APP_API_ENDPOINT + "/api/products/";

  const editProduct = async (id) => {
    console.log("test");
  };

  const deleteProduct = async (id) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      await axios.delete(url + id, config);
    } catch (err) {
      console.log(err.response);
    }
    navigate("/");
    // .then(async (res) => {
    //   console.log(res);
    //   if (!res.ok) {
    //     console.log("login test");
    //     if (res.status === 400) {
    //       setErrorText("Missing Credential");
    //     } else if (res.status === 401) {
    //       setErrorText("Invalid email and/or password");
    //     }
    //     // else {
    //     //   setErrorText("Something went wrong! Please try again");
    //     // }
    //   } else {
    //     const data = await res.json();
    //     setUserContext((prev) => ({ ...prev, token: data.token }));
    //     navigate("/");
    //     console.log("login success");
    //   }
    // })
    // .catch((error) => {
    //   window.alert(error);
    //   return;
    // });
  };

  const getProducts = async (token) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await axios.get(url, config);
    console.log(typeof response.data);
    return response.data;
  };

  useEffect(() => {
    async function fetch() {
      if (!token) {
        navigate("/login");
      }
      const data = await getProducts(token);
      setList(data);
      // if (data.statusText !== "OK") {
      //   if (data.status === 400) {
      //     setErrorText("Missing Credential");
      //   } else if (data.status === 401) {
      //     setErrorText("Invalid email and/or password");
      //   } else {
      //     setErrorText("Something went wrong! Please try again");
      //   }
      // }
      // .catch((error) => {
      //   window.alert(error);
      //   return;
      // });
      console.log("Product loading");
      // navigate("/");
    }

    fetch();
  }, []);

  Object.values(list).map((item) => item.product);

  return (
    <div>
      {token ? <p>logged in</p> : <p>logged out</p>}

      {token && list && (
        <ul>
          {Object.values(list).map((item) => (
            <li key={item._id}>
              {item.product}

              <button type="submit" onClick={() => editProduct(item._id)}>
                <BiMessageSquareEdit />
              </button>
              <button type="submit" onClick={() => deleteProduct(item._id)}>
                <BsDashSquareDotted />
              </button>
            </li>
          ))}
        </ul>
      )}
      {!list && <h3>There is no product</h3>}

      {errorText && <p>{errorText}</p>}
    </div>
  );
}

export default Product;
