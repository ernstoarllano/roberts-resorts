/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require("path")
const { createRemoteFileNode } = require("gatsby-source-filesystem")

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const communityTemplate = path.resolve("./src/templates/Community.js")
  const resortTemplate = path.resolve("./src/templates/Resort.js")
  const resortTypeTemplate = path.resolve("./src/templates/ResortType.js")
  const statusTypeTemplate = path.resolve("./src/templates/StatusType.js")

  const result = await graphql(`
    {
      wpgraphql {
        communities {
          edges {
            node {
              databaseId
              slug
              title
              communityParents {
                nodes {
                  slug
                }
              }
              communityTypes {
                nodes {
                  slug
                }
              }
            }
          }
        }
        communityParents {
          edges {
            node {
              databaseId
              name
              slug
            }
          }
        }
        communityTypes {
          edges {
            node {
              databaseId
              slug
            }
          }
        }
        communityStatuses {
          edges {
            node {
              name
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

  const resorts = result.data.wpgraphql.communityParents.edges
  const resortTypes = result.data.wpgraphql.communityTypes.edges
  const communities = result.data.wpgraphql.communities.edges
  const statusTypes = result.data.wpgraphql.communityStatuses.edges

  resorts.forEach(resort => {
    const { databaseId, slug: resortSlug } = resort.node

    createPage({
      path: `/resort/${resortSlug}`,
      component: resortTemplate,
      context: {
        id: databaseId,
      },
    })

    resortTypes.forEach(resortType => {
      const { slug: resortTypeSlug } = resortType.node

      createPage({
        path: `/resort/${resortSlug}/${resortTypeSlug}`,
        component: resortTypeTemplate,
        context: {
          id: databaseId,
          resortSlug: resortSlug,
          resortTypeSlug: resortTypeSlug,
        },
      })

      if (resortTypeSlug === "homes-for-sale") {
        statusTypes.forEach(statusType => {
          const { slug: statusTypeSlug } = statusType.node

          createPage({
            path: `/resort/${resortSlug}/${resortTypeSlug}/${statusTypeSlug}`,
            component: statusTypeTemplate,
            context: {
              id: databaseId,
              resortSlug: resortSlug,
              resortTypeSlug: resortTypeSlug,
              statusTypeSlug: statusTypeSlug,
            },
          })
        })
      }

      communities.forEach(community => {
        const {
          databaseId: communityDatabaseId,
          slug: communitySlug,
          communityParents: communityResort,
          communityTypes: communityResortType,
        } = community.node

        if (
          communityResort.nodes[0].slug &&
          communityResortType.nodes[0].slug
        ) {
          if (
            communityResort.nodes[0].slug === resortSlug &&
            communityResortType.nodes[0].slug === resortTypeSlug
          ) {
            createPage({
              path: `/resort/${resortSlug}/${resortTypeSlug}/${communitySlug}`,
              component: communityTemplate,
              context: {
                id: communityDatabaseId,
                currentID: communityDatabaseId,
                resortSlug: resortSlug,
                resortTypeSlug: resortTypeSlug,
              },
            })
          }
        }
      })
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
