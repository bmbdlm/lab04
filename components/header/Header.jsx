import React from "react";
import "./Header.css";
class Header extends React.Component {
  render() {
    return (
      <div className="sidebar">
        <a className="active" href="getting-started.html">
          Getting Started
        </a>
        <a href="p2.html">Page 2</a>
        <a href="p4.html">Page 4</a>
        <a href="p5.html">Page 5</a>
      </div>
    );
  }
}
export default Header;
