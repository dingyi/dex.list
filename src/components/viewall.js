import React from 'react'
import { Link } from 'rebass'
import { Link as GLink } from 'gatsby'

const Viewall = props => (
  <Link
    fontSize = '10px'
    css = {{
      '&:hover': {
        color: '#F7417A'
      }
    }}
    {...props}
    as={props.to ? GLink : 'a'}
  >
    View all
  </Link>
)

export default Viewall
