module.exports = {
    plugins: [
        `gatsby-plugin-sass`,
        `gatsby-plugin-react-helmet`,
      {
        resolve: `gatsby-plugin-typescript`,
        options: {
          isTSX: true,
          jsxPragma: `jsx`,
          allExtensions: true,
        },
      },
      {
        resolve: 'gatsby-plugin-html-attributes',
        options: {
          lang: 'en',
          prefix: "og: https://ogp.me/ns#",
        }
      }
    ],
  }