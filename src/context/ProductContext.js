import React, { createContext, useState, useEffect, useContext } from "react";
import productCategories from "../data/categories";
import useSWR from "swr";

export const Context = createContext();

export const StateContext = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState();
  const [totalQuantity, setTotalQuantity] = useState();
  const [qty, setQty] = useState(1);

  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data, error, isLoading } = useSWR("/api/mockData.json", fetcher);

  const onAddToCart = (product, quantity) => {
    const checkProductInCart = cartItems.find((item) => item.id === product.id);
    setTotalPrice((prev) => prev + product.price * quantity);
    setTotalQuantity((prev) => prev + quantity);

    if (checkProductInCart) {
      const updatedCartItems = cartItems.map((cart) => {
        if (cart.id === product.id)
          return {
            ...cart,
            quantity: cart.quantity + quantity,
          };
      });

      setCartItems(updatedCartItems);
    } else {
      product.quantity = quantity;
      setCartItems([...cartItems, { ...product }]);
    }

    console.log(
      product,
      quantity,
      cartItems,
      checkProductInCart,
      totalPrice,
      totalQuantity
    );
  };

  const incrementQuantity = () => {
    setQty((prev) => prev + 1);
  };

  const decrementQuantity = () => {
    setQty((prev) => {
      if (prev - 1 < 1) return 1;
      return prev - 1;
    });
  };

  if (error) return <div>Failed to load data</div>;
  if (!data) return <div>Loading data...</div>;
  if (!products) {
    setProducts(data.products);
  }

  return (
    <Context.Provider
      value={{
        products: data.products,
        categories: productCategories,
        showCart,
        cartItems,
        totalPrice,
        totalQuantity,
        qty,
        incrementQuantity,
        decrementQuantity,
        onAddToCart,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
