import React from 'react'
import { Flex } from 'rebass'

const Section = props =>
  <Flex
    as='section'
    sx={{
      maxWidth: '1056',
      flexWrap: 'wrap',
      mx: 'auto',
      pb: 3
    }}
    {...props}
  />

export default Section