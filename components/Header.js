import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
function Header() {
  return (
    <Navbar className="py-5 bg-slate-100" position="sticky">
      <NavbarBrand justify="start">
        <p className="font-extrabold text-5xl text-Logo cursor-pointer left-10">
          GreenPool
        </p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex" justify="end">
        <NavbarItem>
          <Link className="mr-6 text-xl text-Nav font-extrabold" href="/">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="mr-6 text-xl text-Nav font-bold" href="/users/about">
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className="mr-6 text-xl text-Nav font-bold"
            href="/users/contact"
          >
            Contact
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="ml-auto">
          <Button
            className="bg-green-400 text-white text-lg font-bold"
            as={Link}
            href="/users/signin"
            variant="flat"
          >
            Sign In
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
export default Header;
