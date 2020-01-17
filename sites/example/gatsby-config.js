module.exports = {
  pathPrefix: `/`,

  __experimentalThemes: [{
    resolve: 'gatsby-theme-signalwerk',
    options: {
      root: __dirname,
    }
  }],

  siteMetadata: {
    title: 'Paramatters',
    author: 'Stefan Huber',
    authorUrl: 'https://signalwerk.ch/',
    description: 'Parametric vector design',
    siteUrl: "https://paramatters.signalwerk.ch/"
  },
};
