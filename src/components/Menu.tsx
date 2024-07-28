import { type PageProps } from 'gatsby'
import { Link } from 'gatsby-link'
import React from 'react'

const Menu = () => {
  return (
    <nav className='flex gap-3'>
      <Link to="contact">contact</Link>
      <Link to="about">about</Link>
    </nav>
  )
}

export default Menu
