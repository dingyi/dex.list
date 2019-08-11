import React from 'react'
import { Box, Link } from 'rebass'
import { Link as GLink } from 'gatsby'

const Viewall = (props) => (
  <Box
    p={2}
    width={4/4}
    sx={{
      textAlign: 'center'
    }}
  >
    <Link
      as={props.to ? GLink : 'a'}
      sx={{
        fontSize: '10px',
        ':hover': {
          color: '#F7417A'
        }
      }}
      {...props}
    >
      View all
    </Link>
  </Box>
)

export default Viewall
