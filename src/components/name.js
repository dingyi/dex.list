import React from 'react'
import { Heading } from 'rebass'

const Name = props =>
  <Heading
    as='h3'
    fontSize={['14px', '14px', '14px', '14px', '16px']}
    sx={{
      color: '#350909',
      py: '2px',
      fontWeight: '700',
      lineHeight: '1',
      letterSpacing: '-0.4px'
    }}
    {...props}
  />

export default Name