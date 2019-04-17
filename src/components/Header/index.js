import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <div className="header__bg">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Link to={"/"}>header</Link>
        </div>
      </div>
    );
  }
}

export default Header;
