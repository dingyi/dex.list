import React from 'react'
import { Box, Flex } from 'rebass'
import Section from './section'
import Topic from './topic'
import Card from './card'
import Item from './item'
import Avatar from './avatar'
import Name from './name'
import Slogan from './slogan'
import { Inspiration } from '../data/Inspiration'

const CardsInspiration = () => (
  <>
  <Section>
    <Box p={2} width={4/4}>
      <Topic>Inspiration</Topic>
    </Box>
    {Inspiration.map(props => (
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
              </Name>
              <Slogan>{props.slogan}</Slogan>
            </Box>
          </Flex>
        </Item>
      </Card>
    ))}
  </Section>
  </>
)

export default CardsInspiration