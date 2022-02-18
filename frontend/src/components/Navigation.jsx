import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiUserCircle, BiUserPlus } from "react-icons/bi";
import { BsCardList } from "react-icons/bs";
import { UserContext } from "../context/UserContext";

function Navigation() {
  const [userContext, setUserContext] = useContext(UserContext);
  // const navigate = useNavigate();
  const token = userContext.token;
  const logout = () => {
    setUserContext("");
  };

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Top</Link>
        </li>
        <li>
          <Link to="/Products">
            <BsCardList />
            Your List
          </Link>
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
      {token && (
        <button type="button" onClick={logout}>
          Log out
        </button>
      )}
    </nav>
  );
}

export default Navigation;
