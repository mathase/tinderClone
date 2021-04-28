import React from "react";
import "./header.css";
import Person from "@material-ui/icons/Person";
import Message from "@material-ui/icons/Message";
import logo from "../Assets/logo_tinder.png";
import IconButton from "@material-ui/core/IconButton";

function Header() {
  return (
    <div className="header__nav">
      {/* person button */}
      <IconButton className="nav__btn">
        <Person fontSize="large" />
      </IconButton>
      {/* logo Button */}
      <IconButton className="nav__btn">
        <img className="logo__nav" src={logo} alt="" />
      </IconButton>
      {/* message Button */}
      <IconButton className="nav__btn">
        <Message fontSize="large" />
      </IconButton>
    </div>
  );
}

export default Header;
