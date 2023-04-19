import { useStateContext } from "@/context/ProductContext";
import React, { useRef } from "react";
import { BsTrash } from "react-icons/bs";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineShopping,
} from "react-icons/ai";
import { GrClose } from "react-icons/gr";
import IProduct from "@/interfaces/Product";
import { useRouter } from "next/router";

const Cart = () => {
  const cartRef = useRef<HTMLDivElement>(null);
  const { pathname, push } = useRouter();
  const {
    cartItems,
    totalPrice,
    totalQuantity,
    setShowCart,
    toggleCartItemQuantity,
    handleDelete,
  } = useStateContext();

  document.addEventListener("click", (e) => {
    const target = e.target as HTMLElement;
    if (
      target?.className === "cart-wrapper" ||
      target?.className === "profile_logo"
    ) {
      setShowCart(false);
    }
  });

  const handleOnClick = () => {
    if (pathname !== "/") push("/");
    setShowCart(false);
  };

  return (
    <div className="cart-wrapper" ref={cartRef}>
      <div className="cart-container relative">
        <div className="flex items-center justify-between h-12 cart-header">
          <button type="button" className="cart-heading text-black">
            <span className=" font-bold text-lg">Your Cart</span>
            <span className="ml-2 text-green-600  font-bold text-lg">{`(${totalQuantity} Items)`}</span>
          </button>

          <GrClose
            className="close-button"
            size={25}
            onClick={() => setShowCart(false)}
          />
        </div>

        {cartItems.length < 1 && (
          <div className="flex justify-center items-center flex-col m-10">
            <AiOutlineShopping fill="black" size={150} />
            <h1 className="text-black font-bold text-4xl">
              Shopping Cart is Empty
            </h1>
            <button
              type="button"
              className="bg-transparent hover:bg-black text-gray-700 font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded cursor-pointer mt-10"
              onClick={handleOnClick}
            >
              Continue Shopping
            </button>
          </div>
        )}

        <div className="flex text-black font-bold flex-col cart-items-in-cart">
          {cartItems.length >= 1 &&
            cartItems.map((product: IProduct, i: number) => (
              <div
                className="product flex justify-between w-full gap-3 border-b border-gray-300 cart_items"
                key={product.id}
              >
                <img
                  src={product.images[0].imgUrl}
                  alt="product that was added to cart"
                  className="w-4/12 "
                />

                <div className="grow flex flex-col gap-10">
                  <div className="flex justify-between">
                    <h3>{product.name}</h3>
                    <h4 className="text-gray-500 font-semibold">
                      {product.price}$
                    </h4>
                  </div>
                  <div className="flex justify-between">
                    <div>
                      <p className="quantity-desc flex gap-5 border-2 p-1 items-center">
                        <span
                          className="minus cursor-pointer border-r-2 px-3"
                          onClick={() =>
                            toggleCartItemQuantity(product.id, "decrement")
                          }
                        >
                          <AiOutlineMinus size={15} />
                        </span>

                        <span className="num font-bold text-md">
                          {product.quantity}
                        </span>

                        <span
                          className="plus cursor-pointer border-l-2 px-3"
                          onClick={() =>
                            toggleCartItemQuantity(product.id, "increment")
                          }
                        >
                          <AiOutlinePlus size={15} />
                        </span>
                      </p>
                    </div>

                    <button
                      type="button"
                      className="cursor-pointer"
                      onClick={() => {}}
                    >
                      <BsTrash
                        size={25}
                        className="hover:trash-bin-hover"
                        onClick={() => handleDelete(product.id)}
                      />
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
        {cartItems.length >= 1 && (
          <div className="flex justify-center items-center w-full flex-col gap-2 z-50 p-5 ddddd">
            <div className="font-bold text-black text-3xl flex w-4/12 justify-between gap-2">
              <h4>Subtotal: </h4>
              <h3 className="text-gray-500 font-semibold">${totalPrice}</h3>
            </div>
            <div className="btn-checkout text-black w-8/12">
              <button
                type="button"
                onClick={() => {
                  setShowCart(false);
                  push("login?redirect=/shipping");
                }}
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md cursor-pointer rad w-full"
              >
                Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
