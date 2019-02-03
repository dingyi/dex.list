import React from 'react'
import { Card } from 'rebass'

const Item = props =>
  <Card
    px={2}
    py='12px'
    bg='#fff'
    border='1px solid rgba(255, 240, 245, .9)'
    borderRadius={4}
    boxShadow='card'
    css={{
      height: '100%',
      '&:hover': {
        border: '1px solid rgba(242, 245, 247, .6)',
        boxShadow: '0 1px 0 rgba(0, 0, 0, .05), 0 4px 8px rgba(0, 0, 0, .1), 0 12px 24px rgba(249, 103, 103, .25)',
        transition: 'all .4s ease-out'
      }
    }}
    {...props}
  />

export default Item