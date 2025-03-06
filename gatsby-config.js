/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Chomper's Construction`,
    description: `The homepage for Chomper's Construction`,
    author: `@june87lee`,
    siteUrl: `https://www.chompersconstruction.com`,
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Chomper's Construction`,
        short_name: `Chomper`,
        start_url: `/`,
        background_color: `#1b2229`, // chompBlack
        theme_color: `#fcb922`, // chompYellowLight
        display: `minimal-ui`,
        icon: `static/logoIcon_ver001.png`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Montserrat\:400,700`, // Montserrat with weights 400 (regular) and 700 (bold)
        ],
        display: "swap",
      },
    },
  ],
}
