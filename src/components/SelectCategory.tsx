import React from "react";
import { FormControl, MenuItem, Select, InputLabel } from "@mui/material";
import ICategory from "@/interfaces/Category";
import styles from "../styles/SelectCategory.module.css";

const SelectCategory = ({ selectedCategory, onChange, categories }: any) => {
  return (
    <FormControl className="form_control" sx={{ m: 1, minWidth: 100 }}>
      <InputLabel>Category</InputLabel>
      <Select
        value={selectedCategory.id}
        onChange={onChange}
        label="Category"
        autoWidth
        className={styles.select}
      >
        {categories.map((category: ICategory) => {
          return (
            <MenuItem key={category.id} value={category.id}>
              {category.name}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};

export default SelectCategory;
