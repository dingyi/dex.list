import React from 'react'
import { Box } from 'rebass'

const Price = props =>
  <Box
    as='span'
    color='#F7417A'
    fontSize='9px'
    pl={2}
    css={{
      verticalAlign: 'middle',
      fontFamily: 'MaisonNeue-Light'
    }}
    {...props}
  />

export default Price