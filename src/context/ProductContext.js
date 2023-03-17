import React, { createContext, useState, useEffect } from "react";
import productCategories from "../data/categories";
import useSWR from "swr";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [categories, setCategories] = useState(productCategories);
  const [products, setProducts] = useState([]);

  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data, error, isLoading } = useSWR("/api/mockData.json", fetcher);

  if (error) return <div>Failed to load data</div>;
  if (!data) return <div>Loading data...</div>;
  if (!products) {
    setProducts(data.products);
  }

  return (
    <ProductContext.Provider
      value={{ products: data.products, categories: productCategories }}
    >
      {children}
    </ProductContext.Provider>
  );
};
