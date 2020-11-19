const dotenv = require('dotenv');

dotenv.config({ path: '.env' });

module.exports = {
  siteMetadata: {
    title: `Convo English Interview`,
    description: `Practice speaking English and prepare for your next job interview.`
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-148727012-3",
        head: true,
        anonymize: true,
        respectDNT: true,
        pageTransitionDelay: 0,
      }
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: '8dzvsmx2',
        dataset: 'production',
        watchMode: true,
        token: process.env.SANITY_TOKEN,
      }
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts : [
            `Open Sans\:400,700`
        ],
        display: `swap`
      },
    },
  ],
}
