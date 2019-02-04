import React from 'react'
import { Text } from 'rebass'

const Topic = props =>
  <Text
    fontSize = '10px'
    color = 'rgb(181, 162, 168)'
    css = {{
      textTransform: 'uppercase',
      textShadow: '0 1px 0 rgba(255, 255, 255, .8)'
    }}
    {...props}
  />

export default Topic