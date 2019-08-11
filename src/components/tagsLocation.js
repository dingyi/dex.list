import React from 'react'
import { Box } from 'rebass'

const Location = props =>
  <Box
    as='span'
    role="img"
    aria-label="location"
    sx={{
      fontSize: '12px',
      pl: 2
    }}
    {...props}
  />

export default Location