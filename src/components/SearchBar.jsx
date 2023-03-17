import { Container, InputBase, IconButton, Paper } from '@mui/material'
import React from 'react'
import { BsSearch } from "react-icons/bs"
import SelectCategory from "./SelectCategory";
import productCategories from "../../data/categories";

const SearchBar = () => {

  const onSubmit = (e) => {
    e.preventDefault()
    console.log("Submited");
  }

  const handleInputChange = () => {
    console.log("Changed");
  }

  const handleSelectChange = (e) => {
    const { value } = e.target;
    console.log("Select Changed");
  }

  return (
      <Container>
          <Paper component="form" className="root" onSubmit={onSubmit}> 
          <SelectCategory 
            categories={productCategories}
            onChange={handleSelectChange}          
          />
              <InputBase
                  className='input'
                  onChange={handleInputChange}
                  placeholder="რას ეძებ?"
                  inputProps={{ "aria-label": "Search for a Product"}}
              />
              <IconButton type='submit' aria-label="search" onSubmit={onSubmit}>
                <BsSearch />
              </IconButton>
          </Paper>
      </Container>
  )
}

export default SearchBar