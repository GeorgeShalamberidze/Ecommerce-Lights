import React from 'react'
import { FormControl, MenuItem, Select } from '@mui/material';

const SelectCategory = ({ categories, selectedCategory, handleChange }) => {
  return (
    <FormControl className="form_control">
      <Select value={selectedCategory.id} onChange={handleChange}>
        {categories.map((category) => {
          <MenuItem key={category.id} value={category.category}>
            {category.category}
          </MenuItem>
        })}
      </Select>
    </FormControl>
  )
}

export default SelectCategory