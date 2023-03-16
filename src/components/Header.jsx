import React from 'react'
import Link from "next/link";
import NavBar from './NavBar';
import SearchBar from './SearchBar';

const Header = () => {
  return (
    <header className='main_header'>
      <div className="header_container">
      <Link href="/">
        <img src="/assets/lights_logo2.png" alt="lights.ge" />
      </Link>
      <SearchBar />
      <NavBar />
      </div>
    </header>
  )
}

export default Header