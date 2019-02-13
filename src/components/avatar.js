import React from 'react'
import { Box } from 'rebass'

const Avatar = props =>
  <Box
    flex='0 0 32px'
    css={{
      height: '32px',
      width: '32px'
    }}
    {...props}
  />

export default Avatar