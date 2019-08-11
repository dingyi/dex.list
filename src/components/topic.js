import React from 'react'
import { Box, Text } from 'rebass'

const Topic = props =>
  <Box p={2} width={4/4}>
    <Text
      sx={{
        fontSize: '10px',
        color: 'rgba(181, 162, 168, .8)',
        textTransform: 'uppercase',
        textShadow: '0 1px 0 rgba(255, 255, 255, .8)'
      }}
      {...props}
    />
  </Box>

export default Topic