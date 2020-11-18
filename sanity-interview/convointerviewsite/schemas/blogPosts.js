export default {
  name: 'interview_blogs',
  title: 'Interview Blog Posts',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: Rule => Rule.required(),
      options: {
        source: 'title',
        maxLength: 200,
      },
    },
    {
      name: 'article_number',
      title: 'Article Number',
      type: 'number',
      validation: Rule => Rule.required(),
    },
    {
      name: 'date',
      title: 'Date',
      type: 'date',
      options: {
        dateFormat: 'MMMM Do YYYY'
      }
    },
    {
      name: 'content',
      title: 'Content',
      type: 'text',
    },
    {
      name: 'vocabulary',
      title: 'Vocabulary for Blog Post',
      type: 'text'
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
  preview: {
    select: {
      articleNumber: 'article_number',
      title: 'title'
    },
    prepare: ({ articleNumber, title }) => {
      const blogNumber = `Blog ${articleNumber}`;
      return {
        title: title,
        subtitle: blogNumber,
      }
    }
  }
}