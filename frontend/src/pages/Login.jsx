import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [form, setRegister] = useState({
    email: "",
    password: "",
  });
  const [errorText, setErrorText] = useState("");

  const { email, password } = form;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = {
      email,
      password,
    };
    console.log(process.env.REACT_APP_API_ENDPOINT + "/api/users/login");
    await fetch(process.env.REACT_APP_API_ENDPOINT + "/api/users/login", {
      mode: "cors",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((res) => {
        if (!res.ok) {
          if (res.status === 400) {
            setErrorText("Missing Credential");
          } else if (res.status === 401) {
            setErrorText("Invalid email and/or password");
          } else {
            setErrorText("Something went wrong! Please try again");
          }
        }
      })
      .catch((error) => {
        window.alert(error);
        return;
      });
    console.log(userData);
    console.log("login success");
    navigate("/");
  };

  const onChangeEmail = (e) => {
    setRegister({ ...form, email: e.target.value });
  };

  const onChangePassword = (e) => {
    setRegister({ ...form, password: e.target.value });
  };

  return (
    <div>
      <h1>Welcome Back!</h1>
      <form action="" onSubmit={handleSubmit}>
        {errorText && errorText}
        <input
          type="email"
          onChange={onChangeEmail}
          required="required"
          placeholder="Enter your email"
          id="email"
          name="email"
        />
        <input
          type="password"
          onChange={onChangePassword}
          required="required"
          // value={password}
          placeholder="Enter password"
          id="password"
          name="password"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Login;
