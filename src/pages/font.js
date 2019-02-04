import React from 'react'
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
import { Font } from '../data/Font'

const FontPage = () => (
  <Layout>
    <SEO title="Font" />
    <Section>
      <Box p={2} width={4/4}>
        <Topic>Fonts</Topic>
      </Box>
      {Font.map(props => (
        <Card
          key={props.link}
          href={props.link}
          title={props.name}
        >
          <Item>
            <Flex>
              <Avatar alt={props.name} src={props.logo} />
              <Box pl={2}>
                <Name>
                  {props.name}
                  <Price>{props.price}</Price>
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

export default FontPage
