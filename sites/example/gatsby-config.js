module.exports = {
  pathPrefix: `/`,

  __experimentalThemes: [{
    resolve: 'gatsby-theme-signalwerk',
    options: {
      root: __dirname,
    }
  }],

  siteMetadata: {
    title: 'Blog',
    author: 'Stefan Huber',
    authorUrl: 'https://signalwerk.ch/',
    description: 'A starter blog ...',
    siteUrl: "https://paramatters.signalwerk.ch/"
  },
};
