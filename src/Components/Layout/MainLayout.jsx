import React from 'react'
import { Outlet } from 'react-router-dom'
import ScrollToTop from './ScrollToTop'
import AnimatedCursor from 'react-animated-cursor'
import Navbar from '../Navbar/Navbar.jsx'

const MainLayout = () => {
  return (
    <>
      <AnimatedCursor
        innerSize={0}
        outerSize={35}
        innerScale={0}
        outerScale={1.7}
        outerAlpha={0}
        hasBlendMode={true}
        outerStyle={{
          backgroundImage: 'url(/cursor.png)',
          backgroundSize: 'cover',
          cursor: 'none',
          pointerEvents: 'none'
        }}
        trailingSpeed={1}
      />
      <Navbar />
      <ScrollToTop />
      <Outlet />
    </>
  )
}

export default MainLayout
