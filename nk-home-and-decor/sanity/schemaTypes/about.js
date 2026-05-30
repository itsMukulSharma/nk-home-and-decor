export const about = {
  name: 'about',
  title: 'About Us',
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
      name: 'story',
      title: 'Our Story',
      type: 'text',
    },
    {
      name: 'teamPhotos',
      title: 'Team Photos',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
    },
  ],
};