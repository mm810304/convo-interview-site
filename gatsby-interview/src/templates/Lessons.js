import React from 'react';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/Layout';
import lessonsStyle from './lessons.module.css';

const SingleLesson = ({ lesson }) => {
  return (
    <div className={lessonsStyle.cardContainer}>
      <Link to={`/lesson/${lesson.slug.current}`}>
        <div className={lessonsStyle.card}>
        <Img 
          fluid={lesson.image.image.asset.fluid} 
          alt={lesson.image.image_description} 
          className={lessonsStyle.image}
        />
        <div className={lessonsStyle.lessonInfo}>
          <h1 className={lessonsStyle.lessonTitle}>{lesson.title}</h1>
          <p className={lessonsStyle.lessonNumber}><span className={lessonsStyle.numberBorder}>Lesson Number {lesson.lesson_number}</span></p>
        </div>

        </div>
      </Link>
    </div>
  );
}

const LessonsPage = ({ data, pageContext }) => {
  const lessons = data.lessons.nodes;
  lessons.sort((a, b) => a.lesson_number > b.lesson_number ? 1 : -1);
    return (
        <Layout>
          <div className={lessonsStyle.pageContainer}>
            <div className={lessonsStyle.header}>
              <h1 className={lessonsStyle.title}>{pageContext.categoryName}</h1>
              <p className={lessonsStyle.description}>{pageContext.categoryDescription}</p>
            </div>
            <div className={lessonsStyle.cardWrapper}>
              {lessons.map((lesson) => (
                <SingleLesson 
                  key={lesson.lesson_number}
                  lesson={lesson}
                />
              ))}
            </div>
          </div>

        </Layout>
    );
};

export const query = graphql`
  query($categoryName: String) {
    lessons: allSanityLessons(filter: {category: {category_name: {eq: $categoryName}}}) {
      nodes {
        id
        title
        lesson_number
        slug {
          current
        }
        image {
          image_description
          image {
            asset {
              fluid(maxWidth: 200) {
                ...GatsbySanityImageFluid
              }
            }
          }
        }
      }
    }
  }
`;

export default LessonsPage;