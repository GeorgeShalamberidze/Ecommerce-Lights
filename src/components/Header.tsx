import React from "react";
import Link from "next/link";
import { SearchBar, NavBar } from "../components";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="header_container">
        <Link href="/">
          <img src="/assets/lights_logo2.png" alt="light bulb" />
        </Link>
        <SearchBar />
        <NavBar />
      </div>
    </header>
  );
};

export default Header;
