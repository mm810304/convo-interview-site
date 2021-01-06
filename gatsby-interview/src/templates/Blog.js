import React from 'react';
import { graphql } from 'gatsby';
import ReactHtmlParser from 'react-html-parser';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

import blogStyle from './blog-style.module.css';

const Blog = ({ data, pageContext }) => {
  const { title, content, vocabulary} = data.blog;
  const SEOImage = data.blog.image.asset.fluid;

    return (
      <React.Fragment>
        <SEO 
          title={title} 
          description={`Tips and advice for what to do at your job interview.  This articles covers what you need to know about ${title}`}
          image={SEOImage.src}
          location={`https://www.convointerview.com/blogs/${pageContext.blogSlug}`}
        />
          <Layout>
            <div className={blogStyle.wrapper}>
              <h1 className={blogStyle.title}>{title}</h1>
                <div className={blogStyle.content}>
                  {ReactHtmlParser(content)}
                </div>
                <div className={blogStyle.vocabulary}>
                  <h2>Vocabulary from the Article</h2>
                  {ReactHtmlParser(vocabulary)}
                </div>
            </div>
          </Layout>
      </React.Fragment>
        
    );
};

export const query = graphql`
  query ($blogId: String) {
    blog: sanityInterviewBlogs(id: {eq: $blogId}) {
      title
      content
      vocabulary
      image {
        asset {
          fluid(maxWidth: 1200) {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
  }
`;

export default Blog;