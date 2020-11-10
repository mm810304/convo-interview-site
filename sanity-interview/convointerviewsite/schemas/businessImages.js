export default {
  name: 'images_business',
  title: 'Business Images',
  type: 'document',
  fields: [
    {
      name: 'image_name',
      title: 'Image Name',
      type: 'string',
    },
    {
      name: 'image_description',
      title: 'Image Description',
      type: 'string'
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
        storeOriginalFilename: true
      }
    }
  ]
}