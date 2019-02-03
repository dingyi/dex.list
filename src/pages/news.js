import React from 'react'
import SEO from '../components/seo'
import Layout from '../components/layout'
import CardsNews from '../components/cardsNews'

const NewsPage = () => (
  <Layout>
    <SEO title="News" />
    <CardsNews />
  </Layout>
)

export default NewsPage
