import React, { PropsWithChildren } from 'react'
import Menu from './Menu'


export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div>
      <Menu />
      {children}
    </div>
  )
}
