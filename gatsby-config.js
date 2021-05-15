module.exports = {
    plugins: [
        `gatsby-plugin-sass`,
      {
        resolve: `gatsby-plugin-typescript`,
        options: {
          isTSX: true,
          jsxPragma: `jsx`,
          allExtensions: true,
        },
      },
    ],
  }