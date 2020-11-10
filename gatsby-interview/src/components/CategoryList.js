import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

import categoryStyles from './category-list.module.css';

function SingleCategory({ category }) {
  return (
    <div className={categoryStyles.card}>
      <Link to={`/category/${category.slug.current}`}>
        <Img 
          fluid={category.image.image.asset.fluid} 
          alt={category.image.image_description} 
          className={categoryStyles.image}
        />
        <h5 className={categoryStyles.lessonNumber}><span className={categoryStyles.border}>20 Lessons</span></h5>
        <h2 className={categoryStyles.title}>
          {category.category_name}
        </h2>
      </Link>
    </div>
  );
}

const CategoryList = ({ categories }) => {
  categories.sort((a, b) => a.category_number > b.category_number ? 1 : -1);
  return (
    <div className={categoryStyles.categoryContainer}>
      {categories.map((category) => (
        <SingleCategory key={category.category_number} category={category} />
      ))}
    </div>
  );
};

export default CategoryList;