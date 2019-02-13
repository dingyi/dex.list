import React from 'react'
import { graphql } from 'gatsby'
import Img from "gatsby-image"
import SEO from '../components/seo'
import Layout from '../components/layout'
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

const ListPage = ({data}) => {
  const page = data.listPage
  return (
    <Layout>
      <SEO title={page.title} />
      <Section>
        <Topic>{page.title}</Topic>
        {page.item.map(props => (
          <Card
            key={props.link}
            href={props.link}
            title={props.name}
          >
            <Item>
              <Flex>
                <Avatar>
                  <Img
                    fixed={props.logo.childImageSharp.fixed}
                  />
                </Avatar>
                <Box pl={2}>
                  <Name>
                    {props.name}
                    {props.location ?
                      <Location>{props.location}</Location> :
                      <Price>{props.price}</Price>
                    }
                  </Name>
                  <Slogan>{props.slogan}</Slogan>
                </Box>
              </Flex>
            </Item>
          </Card>
        ))}
      </Section>
    </Layout>
  )
}

export default ListPage

export const query = graphql`
  query($id: String!) {
    listPage: listYaml(id: { eq: $id }) {
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
              width: 32
              height: 32
            ) {
              ...GatsbyImageSharpFixed_tracedSVG
            }
          }
        }
      }
    }
  }
`

// traceSVG: { background: "#fdf3f6" }