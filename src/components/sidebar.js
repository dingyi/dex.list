import React from 'react'
import { Box, Flex } from 'rebass'
import { Sidenav } from '@theme-ui/sidenav'
import Nav from './nav'
import Grid from './grid'
import Wrapper from './wrapper'
import Header from './header'
import Footer from './footer'
import Logo from './logo'
import Submit from './submit'

const Sidebar = props => (
  <Flex
    sx={{
      maxHeight: ['100vh', '100vh'],
    }}
  >
    <Box
      as={Sidenav}
      ref={props.nav}
      open={props.open}
      onClick={e => {
        props.setMenu(false)
      }}
      onBlur={e => {
        props.setMenu(false)
      }}
      onFocus={e => {
        props.setMenu(true)
      }}
      sx={{
        width: 128,
        lineHeight: '1.8',
        flex: 'none',
        px: 3,
        mt: [64, 0],
        pb: 3,
        bg: '#FDF3F6'
      }}>
      <Logo />
      <Nav />
    </Box>
    <Box
      sx={{
        width: '100%',
        minWidth: 0,
        minHeight: 'calc(100vh - 64px)',
        mx: 'auto',
        pb: 5,
      }}>
      <Grid>
        <Header>
          <Logo />
          <Submit />
        </Header>
        <Wrapper>
          {props.children}
        </Wrapper>
        <Footer />
      </Grid>
    </Box>
  </Flex>
)

export default Sidebar