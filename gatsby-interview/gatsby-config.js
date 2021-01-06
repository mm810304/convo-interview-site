const dotenv = require('dotenv');

dotenv.config({ path: '.env' });

module.exports = {
  siteMetadata: {
    title: `Convo English Interview`,
    description: `Practice speaking English and prepare for your next job interview.`
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: 'GTM-TPW2V8N',
        includeInDevelopment: false
      },
    },
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
