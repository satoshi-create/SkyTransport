module.exports = {
  siteMetadata: {
    title: "SkyTransport",
    description:"ソラから宅配を変えるチャレンジ",
    lang:"ja",
    url:"https://keen-galileo-7bd71f.netlify.app"
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `SkyTransport`,
        short_name: `SkyTransport`,
        start_url: `/`,
        background_color: `#52aef5`,
        theme_color: `#52aef5`,
        display: `standalone`,
        icon:`src/images/logo.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
  ],
};
