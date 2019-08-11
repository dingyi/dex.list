import React from 'react'
import styled from 'styled-components'

const Company = styled.div`
  text-align: center;
  font-size: 9px;
  padding-top: 16px;
  padding-bottom: 16px;
  .author {
    padding-left: 8px;
  }
  a {
    font-weight: bold;
    color: #6d434c;
    &:hover {
      color: #443E4C;
    }
    &:hover .de {
      color: #43E6FE;
    }
    &:hover .x {
      color: #F7417A;
    }
  }
`

const FooterNote = () => (
  <Company>
    A <a href="https://dex.group" target="_blank" rel="noopener noreferrer">
        <span className='de'>DE</span><span className='x'>X</span> Group
      </a> project.
    <span className='author'>Design & Code by <a href='https://twitter.com/dingyi'>@dingyi</a></span>
  </Company>
)

export default FooterNote
