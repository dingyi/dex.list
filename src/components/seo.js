import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

function SEO({ title, description, lang, meta, keywords }) {
  return (
    <StaticQuery
      query={detailsQuery}
      render={({ site: { siteMetadata: seo } }) => {
        const metaDescription =
          description || seo.description
        return (
          <Helmet
            htmlAttributes={{
              lang
            }}
            title={title}
            titleTemplate={`%s | ${seo.title}`}
            defaultTitle={seo.title}
            meta={[
              {
                name: `description`,
                content: metaDescription
              }, {
                property: `og:title`,
                content: seo.title
              }, {
                property: `og:description`,
                content: metaDescription
              }, {
                property: `og:image`,
                content: seo.image
              }, {
                property: `og:type`,
                content: `website`
              }, {
                name: `twitter:card`,
                content: `summary`
              }, {
                name: `twitter:creator`,
                content: seo.twitter
              }, {
                name: `twitter:title`,
                content: seo.title
              }, {
                name: `twitter:description`,
                content: metaDescription
              }, {
                name: `twitter:image`,
                content: seo.image
              }
            ]
              .concat(
                keywords.length > 0
                  ? {
                      name: `keywords`,
                      content: keywords.join(`, `),
                    }
                  : [],
              )
              .concat(meta)}
          />
        )
      }}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  keywords: [],
}

SEO.propTypes = {
  title: PropTypes.string.isRequired,
}

export default SEO

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        siteUrl
        title
        description
        author
        image
        canonicalUrl
        twitter
        facebook
      }
    }
  }
`
