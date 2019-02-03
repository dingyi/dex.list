import React from 'react'
import styled from 'styled-components'
import { Link } from 'rebass'

const SubmitButton = styled(Link)`
  color: #fff !important;
  background: #F7417A;
  box-shadow: inset 0 -1px 0 rgba(0,0,0,.16), 0 1px 2px rgba(245, 7, 84, 0.4);
  transition: box-shadow .3s ease, background .2s ease;
  font-size: 10px !important;
  font-family: MaisonNeue-Bold;
  padding: 8px 16px;
  text-transform: uppercase;
  border-radius: 50px;
  position: fixed;
  top: 10px;
  right: 12px;
  :hover {
    background: #e4346b;
    box-shadow: none;
  }
  @media (max-width: 480px) {
    right: 8px;
  }
`

const Submit = () => (
  <>
    <SubmitButton
      href='https://dex.nolt.io/'
      target="_blank"
      rel="noopener noreferrer"
      css={{
        '&:hover': {
          color: '#F7417A'
        }
      }}
    >
      Submit
    </SubmitButton>
  </>
)

export default Submit
