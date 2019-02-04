import React from 'react'
import { Box, Flex } from 'rebass'
import Section from './section'
import Topic from './topic'
import Card from './card'
import Item from './item'
import Avatar from './avatar'
import Name from './name'
import Slogan from './slogan'
import Location from './tagsLocation'
import Viewall from './viewall'
import { Agency } from '../data/Agency'

const CardsAgency = () => (
  <>
  <Section>
    <Box p={2} width={4/4}>
      <Topic>Agency</Topic>
    </Box>
    {Agency.slice(0, 24).map(props => (
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
                <Location>{props.location}</Location>
              </Name>
              <Slogan>{props.slogan}</Slogan>
            </Box>
          </Flex>
        </Item>
      </Card>
    ))}
    <Box
      p={2}
      width={4/4}
      css = {{
        textAlign: 'center'
      }}
    >
      <Viewall to='/agency' />
    </Box>
  </Section>
  </>
)

export default CardsAgency
