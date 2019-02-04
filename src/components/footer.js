import React from 'react'
import { Box, Flex } from 'rebass'
import styled from 'styled-components'
import FooterNote from './footernote'

const Copyright = styled(Box)`
  span {
    padding-left: 16px;
  }
`

const Item = styled.li`
  display: inline-block;
  position: relative;
  padding: 0.2rem 0;
  margin-left: 22px;
  a {
    color: #6d434c;
    &:hover {
      color: #F7417A;
    }
  }
  &:first-child {
    margin-left: 0;
  }
`

const Links = [
  {
    name: 'Links',
    link: 'https://dex.link'
  }, {
    name: 'Events',
    link: 'https://dex.event'
  }, {
    name: 'Trips',
    link: 'https://dex.trip'
  }, {
    name: 'R3',
    link: 'https://r3.agency'
  }
]

const Footer = () => (
  <Box
    as='footer'
    css={{
      flexShrink: '0'
    }}
  >
    <Flex
      px='12px'
      py={4}
      fontSize='10px'
      justifyContent='space-between'
      alignItems='center'
    >
      <Copyright>
        © {new Date().getFullYear()}{" "} - DEX.List
      </Copyright>
      <Box>
        All logos© of their respective owners.
        {/* {Links.map(props => (
          <Item key={props.link}>
            <a
              href={props.link}
              title={props.name}
              target="_blank"
              rel="noopener noreferrer"
            >
              {props.name}
            </a>
          </Item>
        ))} */}
      </Box>
    </Flex>
    <FooterNote />
  </Box>
)

export default Footer
