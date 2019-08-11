const config = require('./src/utils/siteConfig')

const remarkPlugins = [
  require('remark-slug'),
]

module.exports = {
  siteMetadata: {
    siteUrl: config.siteUrl,
    title: config.siteTitle,
    description: config.Description,
    author: config.Author,
    twitter: config.Twitter,
    facebook: config.fbAppID,
    organization: config.Organization,
    canonicalUrl: config.canonicalUrl,
    image: config.Image,
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-subfont',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `./src/data/`,
      },
    },
    'gatsby-transformer-yaml',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-101495671-2',
        head: false
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/images/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: config.siteTitle,
        short_name: config.shortTitle,
        description: config.Description,
        start_url: '/',
        background_color: config.backgroundColor,
        theme_color: config.themeColor,
        display: "standalone",
        icon: `static/images${config.siteLogo}`
      },
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: ['.mdx', '.md'],
        remarkPlugins,
      }
    },
    `gatsby-plugin-advanced-sitemap`,
    'gatsby-plugin-offline',
    'gatsby-plugin-catch-links',
    'gatsby-plugin-theme-ui',
    'gatsby-plugin-netlify',
  ],
}
