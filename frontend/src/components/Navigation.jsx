import React, { useContext, useState } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { BiUserCircle, BiUserPlus } from "react-icons/bi";
import { BsCardList } from "react-icons/bs";
import { UserContext } from "../context/UserContext";
import { Button, Menu, MenuItem, Link, ListItemIcon } from "@mui/material";
import {
  ListAltSharp,
  LoginOutlined,
  PersonAddAltOutlined,
  LogoutOutlined,
} from "@mui/icons-material";

function Navigation() {
  const [userContext, setUserContext] = useContext(UserContext);
  // const navigate = useNavigate();
  const token = userContext.token;
  const logout = () => {
    setUserContext("");
    setAnchorEl(null);
  };

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <nav>
      <Button
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        Dashboard
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>
          <Link
            to="/"
            underline="none"
            component={RouterLink}
            sx={{ display: "flex", alignItems: "center" }}
          >
            Top
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link
            to="/Products"
            underline="none"
            component={RouterLink}
            sx={{ display: "flex", alignItems: "center" }}
          >
            <ListItemIcon>
              <ListAltSharp fontSize="small" />
            </ListItemIcon>
            Your List
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link
            to="/Login"
            underline="none"
            component={RouterLink}
            sx={{ display: "flex", alignItems: "center" }}
          >
            <ListItemIcon>
              <LoginOutlined fontSize="small" />
            </ListItemIcon>
            Login
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link
            to="/Register"
            underline="none"
            component={RouterLink}
            sx={{ display: "flex", alignItems: "center" }}
          >
            <ListItemIcon>
              <PersonAddAltOutlined fontSize="small" />
            </ListItemIcon>
            Register
          </Link>
        </MenuItem>
        {token && (
          <MenuItem onClick={logout}>
            <ListItemIcon>
              <LogoutOutlined fontSize="small" />
            </ListItemIcon>
            Log out
          </MenuItem>
        )}
      </Menu>
    </nav>
  );
}

export default Navigation;
