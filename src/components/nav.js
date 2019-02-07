import React from 'react'
import styled from 'styled-components'
import { Box } from 'rebass'
import { graphql, StaticQuery } from 'gatsby'
import Sidebar from 'react-sidebar'
import { Burger } from 'reline'
import Grid from './grid'
import Wrapper from './wrapper'
import Header from './header'
import Footer from './footer'
import NavLink from './navlink'
import Logo from './logo'
import Submit from './submit'
// import Highway from '@dogstudio/highway'
// import Fade from '../utils/fade.js'

const breakpoint = 'screen and (min-width:40em)'

const initialMQ = typeof window !== 'undefined'
  ? window.matchMedia(breakpoint)
  : { matches: false }

class SidebarState extends React.Component {
  state = {
    open: false,
    docked: initialMQ.matches
  }

  update = fn => this.setState(fn)

  handleMedia = () => {
    this.setState({
      docked: this.media.matches,
      open: false
    })
  }

  componentDidMount () {
    this.media = window.matchMedia(breakpoint)
    this.handleMedia()
    this.media.addListener(this.handleMedia)
  }

  componentWillUnmount () {
    this.media.removeListener(this.handleMedia)
  }

  render () {
    return this.props.render({
      ...this.state,
      update: this.update,
    })
  }
}

const MenuButton = styled.button({
  position: 'fixed',
  top: '12px',
  left: '12px',
  appearance: 'none',
  margin: 0,
  padding: 0,
  fontFamily: 'inherit',
  fontSize: 'inherit',
  color: 'inherit',
  backgroundColor: 'transparent',
  border: 0,
  outline: 'none',
  cursor: 'pointer',
  '&:focus': {
    color: '#F7417A',
  }
})

const Nav = (props) => (
  <SidebarState
    render={({
      open,
      docked,
      update
    }) => (
      <StaticQuery
        query={query}
        render={({ site }) => (
          <Sidebar
            open={open}
            docked={docked}
            onSetOpen={open => update({ open })}
            shadow={false}
            defaultSidebarWidth={160}
            contentClassName={'links'}
            styles={{
              sidebar: {
                zIndex: "99"
              },
              overlay: {
                zIndex: "2"
              }
            }}
            sidebar={(
              <Box
                as='nav'
                px={3}
                bg='#FDF3F6'
                width={[ 128 ]}
                css={{
                  minHeight: '100vh',
                }}
              >
                <Logo />
                <Box pt={3}>
                {site.siteMetadata.navigation.map(({ text, href }) => (
                  <NavLink
                    key={href}
                    to={href}
                    children={text}
                  />
                ))}
                </Box>
              </Box>
            )}
          >
            <Grid data-router-wrapper=''>
              <Header>
                <Logo />
                  {!docked && (
                    <MenuButton
                      onClick={e => {
                        e.preventDefault()
                        update(state => ({ open: !state.open }))
                      }}
                      title='Menu'>
                      <Burger strokeWidth='2' />
                    </MenuButton>
                  )}
                  <Submit />
              </Header>
              <Wrapper data-router-view=''>
                {props.children}
              </Wrapper>
              <Footer />
            </Grid>
          </Sidebar>
        )}
      />
    )}
  />
)

export default Nav

const query = graphql`
  query SidebarQuery {
    site {
      siteMetadata {
        navigation {
          text
          href
        }
      }
    }
  }
`