import React from 'react'
import SEO from '../components/seo'
import Layout from '../components/layout'
import CardsLibrary from '../components/cardsLibrary'

const LibraryPage = () => (
  <Layout>
    <SEO title="Library" />
    <CardsLibrary />
  </Layout>
)

export default LibraryPage
