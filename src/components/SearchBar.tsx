import React, { SyntheticEvent, useContext, useState } from "react";
import SelectCategory from "./SelectCategory";
import { Container, InputBase, IconButton, Paper } from "@mui/material";
import { BsSearch } from "react-icons/bs";
import { Context } from "../context/ProductContext";
import ICategory from "@/interfaces/Category";
import styles from "../styles/SearchBar.module.css";
import IProduct from "@/interfaces/Product";
import Link from "next/link";
import { AiOutlineCloseCircle } from "react-icons/ai";

const SearchBar = () => {
  const contextData = useContext(Context);
  const { products, categories } = contextData;

  const [selectedCategory, setSelectedCategory] = useState<ICategory>(
    categories[0]
  );
  const [searchTerm, setSearchTerm] = useState("");
  const [hasFocus, setHasFocus] = useState(false);

  const filteredProducts = products.filter((product: IProduct) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const onSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    console.log("Submited");
  };

  const handleSelectChange = (e: any) => {
    const { value } = e.target;
    const category = categories.find((cat: ICategory) => cat.id === value);
    setSelectedCategory(category);
  };

  return (
    <Container className="relative">
      <Paper component="form" className="root" onSubmit={onSubmit}>
        <div style={{ display: "flex", flex: 1 }}>
          <SelectCategory
            categories={categories}
            selectedCategory={selectedCategory}
            onChange={handleSelectChange}
          />
          <InputBase
            className={styles.input}
            onChange={(e: any) => setSearchTerm(e.target?.value)}
            placeholder="რას ეძებ?"
            inputProps={{ "aria-label": "Search for a Product" }}
            onFocus={() => setHasFocus(true)}
            onBlur={() => setHasFocus(false)}
          />
          <AiOutlineCloseCircle className="absolute top-6 right-20" size={20} />
        </div>
        <IconButton type="submit" aria-label="search" onSubmit={onSubmit}>
          <BsSearch />
        </IconButton>
      </Paper>
      {searchTerm &&
      searchTerm.length >= 2 &&
      hasFocus &&
      filteredProducts.length > 0 ? (
        <div className="found_products absolute">
          {filteredProducts.map((prod: IProduct, i: number) => (
            <div className="mt-2 cursor-pointer found_prod" key={i}>
              <a href={`${prod.slug}`}>{prod.name}</a>
            </div>
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
