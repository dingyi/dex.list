const _ = require(`lodash`)
const path = require(`path`)
const slug = require(`slug`)

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '@components': path.resolve(__dirname, 'src/components/'),
        '@styles': path.resolve(__dirname, 'src/styles/'),
        '@utils': path.resolve(__dirname, 'src/utils/'),
      },
    },
  })
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return graphql(
    `
    {
      allListYaml {
        edges {
          node {
            id
          }
        }
      }
    }
    `
    ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    const listTemplate = path.resolve(`src/templates/list.js`)
    const Lists = result.data.allListYaml.edges

    _.each(Lists, edge => {
      createPage({
        path: `/${slug(edge.node.id)}/`,
        component: listTemplate,
        context: {
          id: edge.node.id,
        },
      })
    })
  })
}