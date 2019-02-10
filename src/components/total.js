import React from 'react'
import { Box } from 'rebass'
import { graphql, StaticQuery } from 'gatsby'

const Total = () => (
  <StaticQuery
    query={graphql`
      query {
        allListYaml {
          totalCount
          edges {
            node {
              id
            }
          }
        }
      }
    `}
    render={data => (
      <Box>
        {data.allListYaml.totalCount} links and counting.
      </Box>
    )}
  />
)

export default Total