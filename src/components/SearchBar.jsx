import { Container, InputBase, IconButton, Paper } from '@mui/material'
import React from 'react'
import { BsSearch } from "react-icons/bs"
import SelectCategory from "./SelectCategory";

const SearchBar = () => {

  const onSubmit = () => {
    console.log("Submited");
  }

  const handleInputChange = () => {
    console.log("Changed");
  }

  return (
    <div className='searchbar_container'>
        <Container>
            <Paper component="form" className="root" onSubmit={onSubmit}> 
                <InputBase
                    className='input'
                    onChange={handleInputChange}
                    placeholder="რას ეძებ?"
                    inputProps={{ "aria-label": "Search for a Product"}}
                />
                <IconButton>
                     
                </IconButton>
                <SelectCategory />
            </Paper>
            <BsSearch />
        </Container>
    </div>
  )
}

export default SearchBar