import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiUserCircle, BiUserPlus } from "react-icons/bi";

function Navigation() {
  const navigate = useNavigate();
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Top</Link>
        </li>
        <li>
          <Link to="/Login">
            <BiUserCircle />
            Login
          </Link>
        </li>
        <li>
          <Link to="/Register">
            <BiUserPlus />
            Register
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
