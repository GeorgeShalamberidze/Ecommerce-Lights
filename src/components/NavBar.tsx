import React from "react";
import Link from "next/link";
import Cart from "./Cart";
import { CgProfile } from "react-icons/cg";

const NavBar = () => {
  return (
    <div className="nav_container">
      <nav>
        <ul className="flex justify-between items-center px-4 text-lg">
          {/* <li className="p-2">
            <Link href="/">Home</Link>
          </li>
          <li className="p-2">
            <Link href="/contact">Contact</Link>
          </li>
          <li className="p-2">
            <Link href="/products">Products</Link>
          </li> */}
          <li className="p-2">
            <Link
              href="/Login"
              className="flex items-center mx-5 gap-2 font-bold text-xl"
            >
              <span>Login</span>
              <CgProfile size={25} />
            </Link>
          </li>
          <li className="p-2">
            <Cart />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
