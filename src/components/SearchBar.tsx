import React, { SyntheticEvent, useContext, useEffect, useState } from "react";
import { Container, InputBase, IconButton, Paper } from "@mui/material";
import { BsSearch } from "react-icons/bs";
import { Context } from "../context/ProductContext";
import styles from "../styles/SearchBar.module.css";
import IProduct from "@/interfaces/Product";
import { AiOutlineCloseCircle } from "react-icons/ai";

const SearchBar = () => {
  const contextData = useContext(Context);
  const {
    products,
    searchTerm,
    setSearchTerm,
    hasFocus,
    setHasFocus,
    isSearchDrowDownOpen,
    setIsSearchDropDownOpen,
  } = contextData;

  const filteredProducts = products.filter((product: IProduct) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const onSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    console.log("Submited");
  };

  useEffect(() => {
    const handleDocumentClick = (e: any) => {
      const tar = e.target as HTMLElement;
      if (tar.classList.contains("overlay_dropdown")) {
        setIsSearchDropDownOpen(false);
      }
    };

    document.addEventListener("click", handleDocumentClick);

    if (searchTerm && searchTerm.length >= 2 && hasFocus)
      setIsSearchDropDownOpen(true);
    else setIsSearchDropDownOpen(false);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, [searchTerm, hasFocus]);

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
            onBlur={() => setHasFocus(false)}
            value={searchTerm}
          />
          <AiOutlineCloseCircle
            className="absolute top-5 right-12 cursor-pointer"
            size={23}
            onClick={() => setSearchTerm("")}
          />
        </div>
      </Paper>
      {isSearchDrowDownOpen && <div className="overlay_dropdown"></div>}
      {isSearchDrowDownOpen && filteredProducts.length > 0 ? (
        <div className="found_products">
          {filteredProducts.map((prod: IProduct, i: number) => (
            <a
              className="mt-2 cursor-pointer found_prod"
              key={i}
              href={`/product/${prod.slug}`}
            >
              {prod.name}
            </a>
          ))}
        </div>
      ) : (
        isSearchDrowDownOpen &&
        filteredProducts.length === 0 && (
          <div className="found_products">
            <h1>No Products Found...</h1>
          </div>
        )
      )}
    </Container>
  );
};

export default SearchBar;
