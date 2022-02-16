import React, { useState } from "react";

function Login() {
  const [form, setRegister] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { name, mail, password, password2 } = form;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };

  const onChangeName = (e) => {
    setRegister({ ...form, name: e.target.value });
  };

  const onChangeEmail = (e) => {
    setRegister({ ...form, email: e.target.value });
  };

  const onChangePassword = (e) => {
    setRegister({ ...form, name: e.target.value });
  };

  return (
    <div>
      <h1>Welcome Back!</h1>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="email"
          onChange={onChangeEmail}
          required="required"
          placeholder="Enter your email"
          id="email"
        />
        <input
          type="password"
          onChange={onChangePassword}
          required="required"
          value={password}
          placeholder="Enter password"
          id="password"
        />
        <button tyoe="submit">Submit</button>
      </form>
    </div>
  );
}

export default Login;
