import React from 'react';
import { graphql, Link } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

import allLessonsStyle from './list-of-lessons.module.css';

const ListOfAllLessonsPage = ({ data }) => {
  const categories = data.categories.nodes;
  const lessons = data.lessons.nodes;
    return (
      <React.Fragment>
        <SEO 
          title="List of All English Job Interview Lessons" 
          description="Complete list of English job interview questions with full conversation and vocabulary lessons" 
          location="https://www.convointerview.com/listoflessons"  
        />
        <Layout>
          <div className={allLessonsStyle.wrapper}>
            {categories.map((category, index) => {
              const categoryName = category.category_name;
              return (
                <div key={index} className={allLessonsStyle.lessonsContainer}>
                  <h1>{categoryName}</h1>
                  <ol>
                    {lessons.map((lesson) => {
                      const lessonCategory = lesson.category.category_name;
                      if (lessonCategory === categoryName) {
                        return (
                          <li key={lesson.id} className={allLessonsStyle.listItem}><Link to={`/lesson/${lesson.slug.current}`}>{lesson.title}</Link></li>
                        )
                      } else {
                        return null;
                      }
                    })}
                  </ol>
                </div>
              )
            })}
          </div>
        </Layout>
      </React.Fragment>  
    );
};

export const query = graphql`
  query AllLessonsQuery {
    lessons: allSanityLessons(sort: {fields: category___category_name}) {
    nodes {
      id
      title
      category {
        category_name
      }
      slug {
        current
      }
    }
  }
  categories: allSanityCategories(sort: {fields: category_name}) {
    nodes {
      category_name
    }
  }
}`;

export default ListOfAllLessonsPage;