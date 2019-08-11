import React from 'react'
import { Box } from 'rebass'

const Avatar = props =>
  <Box
    sx={{
      height: '32px',
      width: '32px',
      flex: '0 0 32px'
    }}
    {...props}
  />

export default Avatar