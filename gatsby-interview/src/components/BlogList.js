import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

import blogListStyle from './blog-list.module.css';

const SingleBlog = ({ blog }) => {
  const { title } = blog;

  return (
    <div className={blogListStyle.cardContainer}>
      <Link to={`/blogs/${blog.slug.current}`}>
        <div className={blogListStyle.card}>
          <Img 
            fluid={blog.image.asset.fluid}
            className={blogListStyle.image}
          />
          <h2>{title}</h2>
        </div>
      </Link>
    </div>
  );
};

const BlogList = ({ blogs }) => {
  return (
    <div className={blogListStyle.listContainer}>
      {blogs.map((blog) => (
        <SingleBlog key={blog.id} blog={blog} />
      ))}
    </div>
  );
};

export default BlogList;