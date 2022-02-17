import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../app/auth";
import { UserContext } from "../context/UserContext";

function Register() {
  const navigate = useNavigate();
  const [form, setRegister] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const [errorText, setErrorText] = useState([]);
  const [userContext, setUserContext] = useContext(UserContext);

  const { name, email, password, password2 } = form;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      setErrorText([...errorText, `Password dose not match`]);
    } else {
      const userData = {
        name,
        email,
        password,
      };

      await fetch(process.env.REACT_APP_API_ENDPOINT + "/api/users/", {
        mode: "cors",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      })
        .then(async (res) => {
          if (!res.ok) {
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
          }
        })
        .catch((error) => {
          window.alert(error);
          return;
        });
      // register(userData);
      navigate("/");
    }
  };

  const onChangeName = (e) => {
    setErrorText([]);
    setRegister({ ...form, name: e.target.value });
  };

  const onChangeEmail = (e) => {
    setErrorText([]);
    setRegister({ ...form, email: e.target.value });
  };

  const onChangePassword = (e) => {
    setErrorText([]);
    setRegister({ ...form, password: e.target.value });
  };
  const onChangePassword2 = (e) => {
    setErrorText([]);
    setRegister({ ...form, password2: e.target.value });
  };

  return (
    <div>
      <h1>Register</h1>
      <p>Get Started</p>
      <form action="" onSubmit={handleSubmit}>
        {errorText.length > 0 && <p>{errorText}</p>}
        <input
          type="text"
          onChange={onChangeName}
          required="required"
          placeholder="Enter your user name"
          id="name"
          name="name"
        />
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
        <input
          type="password"
          onChange={onChangePassword2}
          required="required"
          // value={password2}
          placeholder="Confirm password"
          id="password2"
          name="password2"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Register;
