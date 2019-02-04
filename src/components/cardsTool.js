import React from 'react'
import { Box, Flex } from 'rebass'
import Section from './section'
import Topic from './topic'
import Card from './card'
import Item from './item'
import Avatar from './avatar'
import Name from './name'
import Slogan from './slogan'
import Price from './tagsPrice'
import { Tool } from '../data/Tool'

const CardsTool = () => (
  <>
  <Section>
    <Box p={2} width={4/4}>
      <Topic>Design Tools</Topic>
    </Box>
    {Tool.map(props => (
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
  </>
)

export default CardsTool