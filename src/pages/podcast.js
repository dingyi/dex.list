import React from 'react'
import SEO from '../components/seo'
import Layout from '../components/layout'
import CardsPodcast from '../components/cardsPodcast'

const PodcastPage = () => (
  <Layout>
    <SEO title="Podcast" />
    <CardsPodcast />
  </Layout>
)

export default PodcastPage
