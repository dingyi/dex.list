import React from 'react'
import SEO from '../components/seo'
import Layout from '../components/layout'
import CardsResource from '../components/cardsResource'

const ResourcePage = () => (
  <Layout>
    <SEO title="Resource" />
      <CardsResource />
  </Layout>
)

export default ResourcePage