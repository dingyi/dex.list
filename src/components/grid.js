import React from 'react'
import { Box } from 'rebass'

const Grid = props =>
  <Box
    px={[ 1, 2 ]}
    css={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh'
    }}
    {...props}
  />

export default Grid