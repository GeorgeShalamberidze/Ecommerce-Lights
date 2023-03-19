import React from "react";
import Link from "next/link";

const NavBar = () => {
  return (
    <div className="nav_container">
      <nav>
        <ul className="flex justify-between items-center px-4 text-lg">
          <li className="p-2">
            <Link href="/">Home</Link>
          </li>
          <li className="p-2">
            <Link href="/contact">Contact</Link>
          </li>
          <li className="p-2">
            <Link href="/products">Products</Link>
          </li>
          <li className="p-2">
            <Link href="/about">About</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
