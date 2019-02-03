import React from 'react'
import { Box, Flex } from 'rebass'
import SEO from '../components/seo'
import Layout from '../components/layout'
import Section from '../components/section'
import Topic from '../components/topic'
import Card from '../components/card'
import Item from '../components/item'
import Avatar from '../components/avatar'
import Name from '../components/name'
import Slogan from '../components/slogan'
import Location from '../components/tagsLocation'
import { Agency } from '../data/Agency'

const AgencyPage = () => (
  <Layout>
    <SEO title="Agency" />
    <Section>
      <Box p={2} width={4/4}>
        <Topic>Agency</Topic>
      </Box>
      {Agency.map(props => (
        <Card
          key={props.link}
          href={props.link}
          title={props.name}
        >
          <Item>
            <Flex>
              <Avatar src={props.logo} />
              <Box pl={2}>
                <Name>
                  {props.name}
                  <Location>{props.location}</Location>
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

export default AgencyPage
