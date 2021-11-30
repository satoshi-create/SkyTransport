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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-react-helmet`,
  ],
};
