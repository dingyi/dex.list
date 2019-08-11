import React, { useState, useRef } from 'react'
import GlobalStyles from '../styles/global'
import { Box } from 'rebass'
import Sidebar from './sidebar'

const Layout = (props) => {
  const fullwidth = props.location === '/404'
  const [menu, setMenu] = useState(false)
  const nav = useRef(null)
  return (
    <>
    <GlobalStyles />
    {!fullwidth ? (
      <Sidebar
        {...props}
        nav={nav}
        open={menu}
        setMenu={setMenu}>
        <Box as='main'>
          {props.children}
        </Box>
      </Sidebar>
    ) : (
      <Box as='main'>
        {props.children}
      </Box>
    )}
  </>
  )
}

export default Layout
