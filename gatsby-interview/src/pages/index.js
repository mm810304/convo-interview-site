import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import CategoryList from '../components/CategoryList';
import 'react-h5-audio-player/lib/styles.css';

import indexStyles from './index.module.css';

const IndexPage = ({ data }) => {
  const categories = data.categories.nodes;
  return (
      <Layout>
        <div className={indexStyles.headerContainer}>
          <h1 className={indexStyles.title}>Convo Interview</h1>
          <p className={indexStyles.description}>This site will help you learn how to speak professional and fluent English during a job interview.  You can practice speaking, learn useful sentence patterns for answering job interview questions, and see many natural examples.  <strong>Choose a category and get started!</strong></p>
        </div>
        <div>
          <CategoryList categories={categories} />
        </div>
      </Layout>
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
        image_description
        image_name
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
}
`;

export default IndexPage;
