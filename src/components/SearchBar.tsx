import React, { SyntheticEvent, useContext, useState } from "react";
import { Container, InputBase, IconButton, Paper } from "@mui/material";
import { BsSearch } from "react-icons/bs";
import { Context } from "../context/ProductContext";
import styles from "../styles/SearchBar.module.css";
import IProduct from "@/interfaces/Product";
import { AiOutlineCloseCircle } from "react-icons/ai";

const SearchBar = () => {
  const contextData = useContext(Context);
  const { products } = contextData;

  const [searchTerm, setSearchTerm] = useState("");
  const [hasFocus, setHasFocus] = useState(false);

  const filteredProducts = products.filter((product: IProduct) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const onSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    console.log("Submited");
  };

  return (
    <Container className="relative">
      <Paper component="form" className="root" onSubmit={onSubmit}>
        <div className="flex flex-1 h-16">
          <IconButton type="submit" aria-label="search" onSubmit={onSubmit}>
            <BsSearch />
          </IconButton>
          <InputBase
            className={styles.input}
            onChange={(e: any) => setSearchTerm(e.target?.value)}
            placeholder="რას ეძებ?"
            inputProps={{ "aria-label": "Search for a Product" }}
            onFocus={() => setHasFocus(true)}
            value={searchTerm}
          />
          <AiOutlineCloseCircle
            className="absolute top-5 right-12 cursor-pointer"
            size={23}
            onClick={() => setSearchTerm("")}
          />
        </div>
      </Paper>
      {searchTerm &&
      searchTerm.length >= 2 &&
      hasFocus &&
      filteredProducts.length > 0 ? (
        <div className="found_products absolute">
          {filteredProducts.map((prod: IProduct, i: number) => (
            <a
              className="mt-2 cursor-pointer found_prod"
              key={i}
              href={`/product/${prod.slug}`}
              onClick={() => setHasFocus(false)}
            >
              {prod.name}
            </a>
          ))}
        </div>
      ) : searchTerm &&
        searchTerm.length >= 2 &&
        hasFocus &&
        filteredProducts.length === 0 ? (
        <div className="found_products absolute">
          <h1>No Products Found...</h1>
        </div>
      ) : (
        ""
      )}
    </Container>
  );
};

export default SearchBar;
