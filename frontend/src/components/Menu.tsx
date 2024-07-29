import { Link } from 'gatsby-link'
import React from 'react'

const Menu = () => {
  return (
    <nav className='flex gap-3 justify-center items-center bg-red-400 w-dvw h-10'>
      <Link to="/">home</Link>
      <Link to="/contact" activeClassName='text-white'>contact</Link>
      <Link to="/about">about</Link>
    </nav>
  )
}

export default Menu
