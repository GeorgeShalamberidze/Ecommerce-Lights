import { useStateContext } from "@/context/ProductContext";
import Link from "next/link";
import React from "react";
import { BsFillCartFill } from "react-icons/bs";

const Cart = () => {
  const { qty, cartItems } = useStateContext();

  return (
    <div>
      <Link
        href="/cart"
        className="flex items-center mx-5 gap-2 font-bold text-xl"
      >
        <span>Cart</span>
        <BsFillCartFill size={25} className="relative" />
      </Link>
      <div className="absolute top-10 right-8 roundBall">
        {cartItems.length}
      </div>
    </div>
  );
};

export default Cart;
