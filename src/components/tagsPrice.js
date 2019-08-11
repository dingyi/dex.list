import React from 'react'
import { Box } from 'rebass'

const Price = props =>
  <Box
    as='span'
    sx={{
      color: '#F7417A',
      fontSize: '10px',
      pl: 2
    }}
    {...props}
  />

export default Price