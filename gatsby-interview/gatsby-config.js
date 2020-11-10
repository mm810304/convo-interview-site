const dotenv = require('dotenv');

dotenv.config({ path: '.env' });

module.exports = {
  siteMetadata: {
    title: `Convo English Interview`,
    description: `Practice speaking English and prepare for your next job interview.`
  },
  plugins: [
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: '8dzvsmx2',
        dataset: 'production',
        watchMode: true,
        token: process.env.SANITY_TOKEN,
      }
    },
  ],
}
