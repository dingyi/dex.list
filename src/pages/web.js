import React from 'react'
import SEO from '../components/seo'
import Layout from '../components/layout'
import CardsWeb from '../components/cardsWeb'

const WebPage = () => (
  <Layout>
    <SEO title="Web" />
    <CardsWeb />
  </Layout>
)

export default WebPage