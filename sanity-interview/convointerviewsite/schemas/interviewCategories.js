export default {
  name: 'categories',
  title: 'Interview Categories',
  type: 'document',
  fields: [
    {
      name: 'category_name',
      title: 'Category',
      type: 'string'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
      description: 'The focus of the conversations in each category',
    },
    {
      name: 'category_number',
      title: 'Category Number',
      type: 'number',
      description: 'Arbitrary order of categories - can be changed.',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: Rule => Rule.required(),
      options: {
        source: 'category_name',
        maxLength: 200,
      },
    },
    {
      name: 'image',
      title: 'Category Image',
      type: 'reference',
      options: {
        hotspot: true,
      },
      to: [
        {
          type: 'images_business'
        }
      ]
    },
  ],
}