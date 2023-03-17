import React from 'react'
import Link from "next/link";

const NavBar = () => {
  return (
    <div className='nav_container'>
      <nav>
        <ul className='navbar_list'>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/contact">Contact</Link></li>
          <li><Link href="/products">Products</Link></li>
          <li><Link href="/about">About Us</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default NavBar