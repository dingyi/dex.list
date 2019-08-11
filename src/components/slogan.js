import React from 'react'
import { Text } from 'rebass'

const Slogan = props =>
  <Text
    fontSize={['11px', '11px', '11px', '11px', '12px']}
    sx={{
      color: '#350909',
      lineHeight: '1.3'
    }}
    {...props}
  />

export default Slogan