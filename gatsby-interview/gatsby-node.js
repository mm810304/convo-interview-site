const path = require('path');

async function turnLessonsIntoCategoryPages({ graphql, actions }) {
  const categoryLessonTemplate = path.resolve('./src/templates/Lessons.js');

  const { data } = await graphql(`
    query {
      categories: allSanityCategories {
        nodes {
          id
          category_name
          category_number
          description
          slug {
            current
          }
        }
      }
    }
  `);

  data.categories.nodes.forEach((category) => {
    actions.createPage({
      path: `/category/${category.slug.current}`,
      component: categoryLessonTemplate,
      context: {
        categoryName: category.category_name,
        categoryDescription: category.description
      }
    });
  })
}

async function turnLessonIntoLessonPage({ graphql, actions}) {
  console.log('Turning lesson into page');
  const lessonTemplate = path.resolve('./src/templates/Lesson.js');

  const { data } = await graphql(`
    query {
      lessons: allSanityLessons {
        nodes {
          id
          title
          slug {
            current
          }
        }
      }
    }
  `);

  data.lessons.nodes.forEach((lesson) => {
    actions.createPage({
      path: `/lesson/${lesson.slug.current}`,
      component: lessonTemplate,
      context: {
        lessonTitle: lesson.title,
        lessonId: lesson.id
      }
    });
  })
}

exports.createPages = async (params) => {
  await Promise.all([
    turnLessonsIntoCategoryPages(params),
    turnLessonIntoLessonPage(params)
  ]);
}
  