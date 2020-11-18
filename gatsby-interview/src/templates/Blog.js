import React from 'react';
import { graphql } from 'gatsby';
import ReactHtmlParser from 'react-html-parser';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

import blogStyle from './blog-style.module.css';

const Blog = ({ data }) => {
  const { title, content, vocabulary} = data.blog;
    return (
      <React.Fragment>
        <SEO title={title} description={`${title} - Tips and advice for what to do at your job interview`}/>
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
    }
  }
`;

export default Blog;