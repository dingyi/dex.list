import React from 'react'
import { Box, Image } from 'rebass'

const Avatar = props =>
  <Box flex='0 0 32px'>
    <Image
      css={{
        width: '32px',
        height: '32px',
        macWidth: 'none !important',
      }}
      {...props}
    />
  </Box>

export default Avatar