export const hero = {
  name: 'hero',
  title: 'Hero Section',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'text',
    },
    {
      name: 'backgroundImage',
      title: 'Background Image/Video',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'ctaText',
      title: 'CTA Button Text',
      type: 'string',
    },
    {
      name: 'ctaLink',
      title: 'CTA Link',
      type: 'string',
    }
  ],
};