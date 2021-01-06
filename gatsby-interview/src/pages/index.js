import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import CategoryList from '../components/CategoryList';
import SEO from '../components/SEO';

import indexStyles from './index.module.css';

const IndexPage = ({ data }) => {
  const categories = data.categories.nodes;
  const SEOImage = categories[0].image.asset.fluid;
  
  return (
    <React.Fragment>
      <SEO 
        title="English Job Interview Preparation" 
        description="Speak professional and fluent English at your next job interview."
        location="https://www.convointerview.com"
        image={SEOImage.src}
      />
      <Layout>
        <div className={indexStyles.headerContainer}>
          <h1 className={indexStyles.title}>Convo Interview</h1>
          <p className={indexStyles.description}>Speak professional and fluent English for job interviews or business situations. <strong>Choose a category and get started!</strong></p>
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
          fluid(maxWidth: 1200) {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
  }
}
`;

export default IndexPage;
