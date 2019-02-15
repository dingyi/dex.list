import React from 'react'
import { Box } from 'rebass'

const Header = props => (
  <Box
    as='header'
    bg='#fdf3f6'
    css={{
      position: 'sticky',
      top: '0',
      left: '0',
      width: '100%',
      zIndex: '1',
      height: '48px',
      textAlign: 'center'
    }}
    {...props}
  >
  </Box>
)

export default Header
