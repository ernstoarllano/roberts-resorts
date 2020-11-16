/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require("path")
const { createRemoteFileNode } = require("gatsby-source-filesystem")

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const resortTemplate = path.resolve("./src/templates/Resort.js")
  const resortTypeTemplate = path.resolve("./src/templates/ResortType.js")
  const result = await graphql(`
    {
      wpgraphql {
        communities {
          edges {
            node {
              childCommunities {
                edges {
                  node {
                    id
                    slug
                    title
                  }
                }
              }
              id
              slug
              title
            }
          }
        }
        communityTypes {
          edges {
            node {
              id
              slug
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild("Error while running GraphQL query.")
  }

  const resorts = result.data.wpgraphql.communities.edges
  const resortTypes = result.data.wpgraphql.communityTypes.edges

  resorts.forEach(resort => {
    const { childCommunities, id, slug } = resort.node

    createPage({
      path: `/resort/${slug}`,
      component: resortTemplate,
      context: {
        id: id,
      },
    })
  })

  resortTypes.forEach(resortType => {
    const { slug, id } = resortType.node

    createPage({
      path: `/resorts/${slug}`,
      component: resortTypeTemplate,
      context: {
        id: id,
      },
    })
  })
}

// https://www.gatsbyjs.org/docs/schema-customization/#feeding-remote-images-into-gatsby-image
exports.createResolvers = async ({
  actions,
  cache,
  createNodeId,
  createResolvers,
  store,
  reporter,
}) => {
  const { createNode } = actions

  await createResolvers({
    WPGraphQL_MediaItem: {
      imageFile: {
        type: "File",
        async resolve(source) {
          let url = source.sourceUrl

          if (source.guid) {
            url = source.guid
          }

          return await createRemoteFileNode({
            url,
            store,
            cache,
            createNode,
            createNodeId,
            reporter,
          })
        },
      },
    },
  })
}
