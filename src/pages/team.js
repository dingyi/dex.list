import React from 'react'
import SEO from '../components/seo'
import Layout from '../components/layout'
import CardsTeam from '../components/cardsTeam'

const TeamPage = () => (
  <Layout>
    <SEO title="Team" />
    <CardsTeam />
  </Layout>
)

export default TeamPage