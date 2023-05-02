import Layout from "@/components/Layout";
import { useStateContext } from "@/context/ProductContext";
import IProduct from "@/interfaces/Product";
import Image from "next/image";
import React from "react";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineShopping,
} from "react-icons/ai";
import { BsTrash } from "react-icons/bs";

const CartPage = () => {
  const { cartItems, toggleCartItemQuantity, handleDelete } = useStateContext();

  console.log(cartItems);
  return (
    <Layout title="Cart - ">
      <div className="flex justify-center items-center m-8">
        {cartItems.length === 0 ? (
          <div className="flex justify-center items-center flex-col m-10">
            <AiOutlineShopping fill="black" size={150} />
            <h1 className="text-black font-bold text-4xl">
              Shopping Cart is Empty
            </h1>
            <button
              type="button"
              className="bg-transparent hover:bg-black text-gray-700 font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded cursor-pointer mt-10"
              onClick={() => console.log(123)}
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <div className="w-4/5 flex flex-col gap-2">
            <h1 className="text-3xl mb-6">
              You have {cartItems.length} products in your bag:{" "}
            </h1>
            {cartItems.length >= 1 &&
              cartItems.map((product: IProduct) => (
                <div
                  className="product_in_page flex justify-between w-full gap-3 items-center rounded-lg"
                  key={product.id}
                >
                  <div className="head"></div>
                  <Image
                    src={product.images[0].imgUrl}
                    alt="product that was added to cart"
                    className="w-3/12"
                    width={500}
                    height={500}
                  />

                  <div className="grow flex flex-col gap-10">
                    <div className="flex justify-between">
                      <h2 className="text-xl">{product.name}</h2>
                      <h4 className="text-gray-500 font-semibold text-xl">
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
                            <AiOutlineMinus size={25} />
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
                            <AiOutlinePlus size={25} />
                          </span>
                        </p>
                      </div>

                      <button
                        type="button"
                        className="cursor-pointer"
                        onClick={() => {}}
                      >
                        <BsTrash
                          size={35}
                          className="hover:trash-bin-hover"
                          onClick={() => handleDelete(product.id)}
                        />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        )}
      </div>
    </Layout>
  );
};

export default CartPage;
