const config = require('./src/utils/siteConfig')

module.exports = {
  siteMetadata: {
    url: config.siteUrl,
    title: config.siteTitle,
    description: config.Description,
    author: config.Author,
    twitter: config.Twitter,
    facebook: config.fbAppID,
    organization: config.Organization,
    canonicalUrl: config.canonicalUrl,
    image: config.Image,
    navigation: [
      { text: 'All', href: '/' },
      { text: 'Agency', href: '/agency' },
      { text: 'Background', href: '/background' },
      { text: 'Color', href: '/color' },
      { text: 'Conference', href: '/conference' },
      { text: 'Design System', href: '/designsystem' },
      { text: 'Design Tool', href: '/tool' },
      { text: 'Font', href: '/font' },
      { text: 'Gradient', href: '/gradient' },
      { text: 'Icon', href: '/icon' },
      { text: 'Illustration', href: '/illustration' },
      { text: 'Inspiration', href: '/inspiration' },
      { text: 'Library', href: '/library' },
      { text: 'Mockup', href: '/mockup' },
      { text: 'Motion', href: '/motion' },
      { text: 'News', href: '/news' },
      { text: 'Newsletter', href: '/newsletter' },
      { text: 'Online Course', href: '/onlinecourse' },
      { text: 'Photos', href: '/photo' },
      { text: 'Podcast', href: '/podcast' },
      { text: 'Prototype', href: '/prototype' },
      { text: 'Resource', href: '/resource' },
      { text: 'Sound', href: '/sound' },
      { text: 'Team', href: '/team' },
      { text: 'Video Course', href: '/videocourse' },
      { text: 'Web Design', href: '/web' },
      { text: 'WeChat', href: '/wechat' },
      { text: 'Wireframe', href: '/wireframe' },
    ],
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-subfont',
    // 'gatsby-plugin-robots-txt',
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
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: config.siteTitle,
        short_name: config.shortTitle,
        description: config.Description,
        start_url: '/',
        background_color: config.backgroundColor,
        theme_color: config.themeColor,
        display: 'minimal-ui',
        icon: `static/images${config.siteLogo}`
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-netlify',
  ],
}
