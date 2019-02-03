import React from 'react'
import { Link } from 'rebass'

const Card = props =>
  <Link
    target="_blank"
    rel="noopener noreferrer"
    p={1}
    width={[1/2, 1/2, 1/3, 1/4, 1/6, 1/8]}
    {...props}
  />

export default Card