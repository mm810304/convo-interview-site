export default {
  name: 'lessons',
  title: 'Interview Lessons',
  type: 'document',
  fields: [
    {
      name: 'lesson_number',
      title: 'Lesson Number',
      type: 'number',
      validation: Rule => Rule.required(),
    },
    {
      name: 'category',
      title: 'Category',
      type: 'reference',
      validation: Rule => Rule.required(),
      to: [
        {
          type: 'categories'
        }
      ]
    },
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
      name: 'dialogue',
      title: 'Lesson Dialogue',
      type: 'text',
    },
    {
      name: 'patterns',
      title: 'Sentence Patterns',
      type: 'text'
    },
    {
      name: 'full_audio',
      title: 'Full Audio',
      type: 'file',
      description: 'Audio for the whole conversation',
      validation: Rule => Rule.required(),
      options: {
        storeOriginalFilename: true
      },
    },
    {
      name: 'part_audio',
      title: 'Part Audio',
      type: 'file',
      description: 'Audio with only the interviewee part.',
      validation: Rule => Rule.required(),
      options: {
        storeOriginalFilename: true
      },
    },
    {
      name: 'image',
      title: 'Lesson Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
  preview: {
    select: {
      lessonNumber: 'lesson_number',
      title: 'title'
    },
    prepare: ({ lessonNumber, title }) => {
      const lesson = `Lesson Number ${lessonNumber}`;
      return {
        title: title,
        subtitle: lesson,
      }
    }
  }
}