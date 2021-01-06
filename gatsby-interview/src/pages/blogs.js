import React from 'react';
import { graphql } from 'gatsby';

import BlogList from '../components/BlogList';
import SEO from '../components/SEO';

import Layout from '../components/Layout';
import blogsStyle from './blogs.module.css';

const BlogIndexPage = ({ data }) => {
  const blogs = data.blogs.nodes;
  const image = data.blogs.nodes[0].image.asset.fluid;

    return (
      <React.Fragment>
        <SEO 
          title="English Inteview Tips and Advice" 
          description="Find out some useful tips and advice to make sure you ace your next English job interview" 
          image={image.src}
          location="https://www.convointerview.com/blogs"
        />
        <Layout>
          <main className={blogsStyle.main}>
            <div className={blogsStyle.header}>
              <h1 className={blogsStyle.headerText}>Interview Articles</h1>
              <p>Get tips and advice for your job interview in English.</p>
            </div>
            <div className={blogsStyle.blogListContainer}>
              <BlogList blogs={blogs} />
            </div>
          </main>
        </Layout>
      </React.Fragment>
        
    );
};

export const query = graphql`
  query BlogQuery {
    blogs: allSanityInterviewBlogs {
      nodes {
        id
        title
        article_number
        slug {
          current
        }
        image {
          asset {
            fluid(maxWidth: 300) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;

export default BlogIndexPage;