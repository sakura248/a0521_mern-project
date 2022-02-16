import React, { useState } from "react";

function Register() {
  const [form, setRegister] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
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
  const onChangePassword2 = (e) => {
    setRegister({ ...form, name: e.target.value });
  };

  return (
    <div>
      <h1>Register</h1>
      <p>Get Started</p>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={onChangeName}
          required="required"
          placeholder="Enter your user name"
          id="name"
        />
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
        <input
          type="password"
          onChange={onChangePassword2}
          required="required"
          value={password2}
          placeholder="Confirm password"
          id="password2"
        />
        <button tyoe="submit">Submit</button>
      </form>
    </div>
  );
}

export default Register;
