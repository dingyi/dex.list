import React from 'react'
import { Heading } from 'rebass'

const Name = props =>
  <Heading
    as='h3'
    color='#350909'
    fontFamily='MaisonNeue-Bold'
    fontSize={['14px', '14px', '14px', '14px', '16px']}
    fontWeight='bold'
    py='2px'
    css={{
      lineHeight: '1',
      letterSpacing: '-0.4px'
    }}
    {...props}
  />

export default Name