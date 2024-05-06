import React, { ReactNode } from 'react'
import TopBar from '../TopBar'

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <TopBar />
      {children}
    </div>
  )
}
export default Layout
