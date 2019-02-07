import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Img from "gatsby-image"
import { Box, Flex } from 'rebass'
import Section from '../components/section'
import Topic from '../components/topic'
import Card from '../components/card'
import Item from '../components/item'
import Avatar from '../components/avatar'
import Name from '../components/name'
import Slogan from '../components/slogan'
import Price from '../components/tagsPrice'
import Location from '../components/tagsLocation'
import Viewall from '../components/viewall'

const IndexPage = ({ data }) => {
  const cards = data.allListYaml.edges
  return (
    <Layout>
      <SEO title='' keywords={[`bookmarks`, `design`, `all-in-one`]} />
      {cards.map(({ node }) => {
        const items = node.item
        const url = `/${node.id}`
        return (
          <Section key={node.id}>
            <Topic>{node.id}</Topic>
            {items.slice(0, 24).map(item => {
              return (
              <Card
                key={item.link}
                href={item.link}
                title={item.name}
              >
                <Item>
                  <Flex>
                    <Avatar>
                      <Img
                        fixed={item.logo.childImageSharp.fixed}
                      />
                    </Avatar>
                    <Box pl={2}>
                      <Name>
                        {item.name}
                        {item.location ?
                          <Location>{item.location}</Location> :
                          <Price>{item.price}</Price>
                        }
                      </Name>
                      <Slogan>{item.slogan}</Slogan>
                    </Box>
                  </Flex>
                </Item>
              </Card>
              )
            })}
            {(items.length >=24) ? <Viewall to={url} /> : null}
          </Section>
        )
      })}
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query IndexPage {
    allListYaml(
      sort: { order: ASC, fields: [id] }
    ) {
      edges {
        node {
          id
          title
          item {
            name
            slogan
            price
            location
            link
            logo {
              childImageSharp {
                fixed(
                  width: 32 height: 32
                ) {
                  ...GatsbyImageSharpFixed_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  }
`
