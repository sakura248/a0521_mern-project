import React, { useState, useContext } from "react";
// import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { Box, Button, TextField } from "@mui/material";

function Login() {
  // const navigate = useNavigate();
  const [form, setRegister] = useState({
    email: "",
    password: "",
  });
  const [errorText, setErrorText] = useState("");
  const [userContext, setUserContext] = useContext(UserContext);

  const { email, password } = form;

  const handleSubmit = async (e) => {
    // 修正したい
    e.preventDefault();
    const userData = {
      email,
      password,
    };
    await fetch(process.env.REACT_APP_API_ENDPOINT + "/api/users/login", {
      mode: "cors",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then(async (res) => {
        if (!res.ok) {
          console.log("login test");
          if (res.status === 400) {
            setErrorText("Missing Credential");
          } else if (res.status === 401) {
            setErrorText("Invalid email and/or password");
          }
          // else {
          //   setErrorText("Something went wrong! Please try again");
          // }
        } else {
          const data = await res.json();
          setUserContext((prev) => ({ ...prev, token: data.token }));
          console.log("login success");
        }
      })
      .catch((error) => {
        window.alert(error);
        return;
      });
    // console.log(userData);
  };

  const onChangeEmail = (e) => {
    setRegister({ ...form, email: e.target.value });
  };

  const onChangePassword = (e) => {
    setRegister({ ...form, password: e.target.value });
  };

  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1>Welcome Back!</h1>
      <form action="" onSubmit={handleSubmit}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {errorText && errorText}
          <TextField
            type="email"
            onChange={onChangeEmail}
            required="required"
            placeholder="Enter your email"
            id="email"
            name="email"
            label="Email"
            sx={{
              m: 2,
            }}
          />
          <TextField
            type="password"
            onChange={onChangePassword}
            required="required"
            // value={password}
            placeholder="Enter password"
            id="password"
            name="password"
            label="Password"
          />
          <Button type="submit" variant="contained" sx={{ m: 1 }}>
            Submit
          </Button>
        </Box>
      </form>
    </Box>
  );
}

export default Login;
