import React, { Component } from 'react'
import { Box } from 'rebass'

// class Header extends Component {
//   constructor(props) {
//     super(props)
//     this.state = { scroll: 'scroll' }
//   }
//   handleScroll() {
//     this.setState({ scroll: 'scrolling' })
//     setTimeout(() => { this.setState({ scroll: 'scroll' }) }, 100)
//   }

//   render() {
//     const { scroll }  = this.state
//     return (
//       <Top className={ scroll } onScroll={ this.handleScroll } />
//     )
//   }
// }

const Header = props => (
  <Box
    as='header'
    bg='#fdf3f6'
    css={{
      position: 'sticky',
      top: '0',
      left: '0',
      width: '100%',
      zIndex: '1',
      height: '48px',
      textAlign: 'center'
    }}
    {...props}
  >
  </Box>
)

export default Header
