import React from 'react';

import SEO from '../components/SEO';
import Layout from '../components/Layout';

const FourZeroFourPage = () => {
    return (
      <React.Fragment>
        <SEO title="Page Not Found" />
          <Layout>
              <h2>Oh our bad!  Or maybe your bad...but I guess it doesn't really matter.  What matters is that the page you are looking for does not seem to exist.</h2>
          </Layout>
      </React.Fragment>

    );
}

export default FourZeroFourPage;