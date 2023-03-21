import React, { SyntheticEvent, useContext, useState } from "react";
import SelectCategory from "./SelectCategory";
import { Container, InputBase, IconButton, Paper } from "@mui/material";
import { BsSearch } from "react-icons/bs";
import { Context } from "../context/ProductContext";
import ICategory from "@/interfaces/Category";
import styles from "../styles/SearchBar.module.css";

const SearchBar = () => {
  const contextData = useContext(Context);
  const { products, categories } = contextData;

  const [selectedCategory, setSelectedCategory] = useState<ICategory>(
    categories[0]
  );

  const onSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    console.log("Submited");
  };

  const handleInputChange = () => {
    console.log("Changed");
  };

  const handleSelectChange = (e: any) => {
    const { value } = e.target;
    const category = categories.find((cat: ICategory) => cat.id === value);
    setSelectedCategory(category);
  };

  return (
    <Container>
      <Paper component="form" className="root" onSubmit={onSubmit}>
        <div style={{ display: "flex", flex: 1 }}>
          <SelectCategory
            categories={categories}
            selectedCategory={selectedCategory}
            onChange={handleSelectChange}
          />
          <InputBase
            className={styles.input}
            onChange={handleInputChange}
            placeholder="რას ეძებ?"
            inputProps={{ "aria-label": "Search for a Product" }}
          />
        </div>
        <IconButton type="submit" aria-label="search" onSubmit={onSubmit}>
          <BsSearch />
        </IconButton>
      </Paper>
    </Container>
  );
};

export default SearchBar;
