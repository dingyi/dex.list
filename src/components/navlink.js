import React from 'react'
import styled from 'styled-components'
import { themeGet } from 'styled-system'
import { Link } from 'rebass'
import { Link as GLink } from 'gatsby'

const NavLink = styled(Link)({
  display: 'block',
  textDecoration: 'none',
  lineHeight: '1.8',
  fontWeight: '500',
}, props => ({
  '&[aria-current]': {
    color: themeGet('colors.pink')(props)
  }
}))

NavLink.defaultProps = {
  fontSize: 12,
  color: '#6d434c',
}

const getProps = ({ isCurrent, className }) => isCurrent ? {
  className: className + ' active'
} : null

export default props =>
  <NavLink
    {...props}
    as={props.to ? GLink : 'a'}
  />