import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import GlobalStyles from '../styles/global'
import { Box } from 'rebass'
import { ThemeProvider } from 'styled-components'
import theme from '../styles/theme'
import Nav from './nav'

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
          <GlobalStyles />
          <Box
            as='main'
            css={{
              position: 'absolute',
              top: '0',
              bottom: '0',
              left: '0',
              right: '0'
            }}
          >

            <Nav>
              {children}
            </Nav>
          </Box>
      </>
    )}
  />
  </ThemeProvider>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
