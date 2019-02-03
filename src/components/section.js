import React from 'react'
import { Flex } from 'rebass'

const Section = props =>
  <Flex
    as='section'
    flexWrap='wrap'
    mx='auto'
    pb={3}
    css={{
      maxWidth: '1056'
    }}
    {...props}
  />

export default Section