import React from 'react'
import { Box } from 'rebass'

const Header = props => (
  <Box
    as='header'
    sx={{
      position: 'sticky',
      top: '0',
      left: '0',
      width: '100%',
      zIndex: '1',
      height: '48px',
      textAlign: 'center',
      backdropFilter: 'blur(2px)'
    }}
    {...props}
  >
  </Box>
)

export default Header
