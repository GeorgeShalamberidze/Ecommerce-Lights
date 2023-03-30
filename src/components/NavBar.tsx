import React from "react";
import Link from "next/link";
import Cart from "./Cart";
import { CgProfile } from "react-icons/cg";
import { useStateContext } from "@/context/ProductContext";
import { BsFillCartFill } from "react-icons/bs";

const NavBar = () => {
  const { showCart, setShowCart, totalQuantity } = useStateContext();

  return (
    <div className="nav_container">
      <nav>
        <ul className="flex justify-between items-center px-4 text-lg">
          <li className="p-2">
            <Link
              href="/login"
              className="flex items-center mx-5 gap-2 font-bold text-xl"
            >
              <span>Login</span>
              <CgProfile size={25} />
            </Link>
          </li>
          <li className="p-2">
            <button
              type="button"
              className="flex items-center mx-5 gap-2 font-bold text-xl cursor-pointer hover:underline"
              onClick={() => setShowCart((prev: boolean) => !prev)}
            >
              <span>Cart</span>
              <BsFillCartFill size={25} className="relative" />
            </button>
            <div className="absolute top-10 right-8 roundBall">
              {totalQuantity}
            </div>
          </li>
        </ul>
        {showCart && <Cart />}
      </nav>
    </div>
  );
};

export default NavBar;
