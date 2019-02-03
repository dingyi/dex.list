import React from 'react'
import { Heading } from 'rebass'
import SEO from '../components/seo'
import Layout from '../components/layout'

const ToolPage = () => (
  <Layout>
    <SEO title="Wechat" />
    <Heading
      css={{
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)'
      }}
    >
      coming soon...
    </Heading>
  </Layout>
)

export default ToolPage