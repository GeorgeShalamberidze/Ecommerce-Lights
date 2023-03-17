import React from 'react'
import Link from "next/link";
import Image from "next/legacy/image";
import { SearchBar, NavBar } from '../components'

const Header = () => {
  return (
    <header className='main_header'>
      <div className="header_container">
      <Link href="/">
        <img 
          src="/assets/lights_logo2.png"
          alt="light bulb"
        />
      </Link>
      <SearchBar />
      <NavBar />
      </div>
    </header>
  )
}

export default Header