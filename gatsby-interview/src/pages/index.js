import React from 'react';
import { graphql } from 'gatsby';
import AdSense from 'react-adsense';

import Layout from '../components/Layout';
import CategoryList from '../components/CategoryList';
import SEO from '../components/SEO';

import indexStyles from './index.module.css';

const IndexPage = ({ data }) => {
  const categories = data.categories.nodes;
  return (
    <React.Fragment>
      <SEO title="English Job Interview Preparation" description="Prepare to speak professional and fluent English at your next job interview."/>
      <Layout>
        <div className={indexStyles.headerContainer}>
          <h1 className={indexStyles.title}>Convo Interview</h1>
          <p className={indexStyles.description}>Speak professional and fluent English at your next job interview or improve your business English skills. Practice speaking, learn useful sentence patterns, and see many natural examples. <strong>Choose a category and get started!</strong></p>
        </div>
        <div>
          <CategoryList categories={categories} />
        </div>
      </Layout>
    </React.Fragment>
  );
};

export const query = graphql`
 query CategoryQuery {
  categories: allSanityCategories {
    nodes {
      _id
      category_name
      description
      category_number
      slug {
        current
      }
      image {
        asset {
          fluid(maxWidth: 400) {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
  }
}
`;

export default IndexPage;
