export const service = {
  name: 'service',
  title: 'Service',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'icon',
      title: 'Icon/Image',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'priceRange',
      title: 'Price Range',
      type: 'string',
    },
    {
      name: 'keyPoints',
      title: 'Key Points',
      type: 'array',
      of: [{ type: 'string' }],
    },
  ],
};