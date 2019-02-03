import React from 'react'
import { Box } from 'rebass'

const Location = props =>
  <Box
    as='span'
    fontSize='12px'
    pl={2}
    role="img"
    aria-label="location"
    {...props}
  />

export default Location