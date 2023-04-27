import React, { createContext, useState, useContext } from "react";
import productCategories from "../data/categories";
import useSWR from "swr";

export const Context = createContext();

export const StateContext = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [qty, setQty] = useState(1);

  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data, error } = useSWR("/api/mockData.json", fetcher);

  const onAddToCart = (product, quantity) => {
    const checkProductInCart = cartItems.find((item) => item.id === product.id);
    console.log(cartItems);

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
  };

  const handleDelete = (id) => {
    let foundProduct = cartItems.find((product) => product.id === id);
    let newCartItems = cartItems.filter((item) => item.id !== foundProduct.id);

    setCartItems([...newCartItems]);
    setTotalPrice((prev) => prev - foundProduct.quantity * foundProduct.price);
    setTotalQuantity((prev) => prev - foundProduct.quantity);
  };

  const toggleCartItemQuantity = (id, value) => {
    let foundProduct = cartItems.find((product) => product.id === id);
    let index = cartItems.findIndex((product) => product.id === id);
    let newCartItems = cartItems.filter((item) => item.id !== id);

    if (value === "increment") {
      foundProduct = { ...foundProduct, quantity: foundProduct.quantity + 1 };
      newCartItems.splice(index, 0, foundProduct);
      setCartItems([...newCartItems]);
      setTotalPrice((prev) => prev + foundProduct.price);
      setTotalQuantity((prev) => prev + 1);
    } else if (value === "decrement") {
      if (foundProduct.quantity > 1) {
        foundProduct = { ...foundProduct, quantity: foundProduct.quantity - 1 };
        newCartItems.splice(index, 0, foundProduct);
        setCartItems(newCartItems);
        setTotalPrice((prev) => prev - foundProduct.price);
        setTotalQuantity((prev) => prev - 1);
      }
    }
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

  const resetCart = () => {
    setProducts([]);
    setShowCart(false);
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantity(0);
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
        setShowCart,
        incrementQuantity,
        decrementQuantity,
        onAddToCart,
        toggleCartItemQuantity,
        handleDelete,
        resetCart,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
