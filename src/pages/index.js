import React from 'react'
import Layout from '../components/layout'
import Content from '../components/content'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title='' keywords={[`bookmarks`, `design`, `all-in-one`]} />
    <Content />
  </Layout>
)

export default IndexPage
