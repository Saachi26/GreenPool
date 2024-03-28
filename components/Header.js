import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";

import "./Header.css";
function Header() {
  return (
    <div className="nav">
      <div justify="start">
        <p className="font-extrabold text-5xl text-Logo cursor-pointer logo">
          GreenPool
        </p>
      </div>
      <div className="navmain">
        <Link className="nav1" href="/">
          Home
        </Link>
        <Link className="nav2" href="/users/about">
          About
        </Link>
        <Link className="nav3" href="/users/contact">
          Contact
        </Link>
      </div>
    </div>
  );
}
export default Header;
