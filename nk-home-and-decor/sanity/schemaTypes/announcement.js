export const announcement = {
  name: 'announcement',
  title: 'Announcements/Banners',
  type: 'document',
  fields: [
    {
      name: 'text',
      title: 'Text',
      type: 'string',
    },
    {
      name: 'link',
      title: 'Link',
      type: 'string',
    },
    {
      name: 'active',
      title: 'Active',
      type: 'boolean',
      initialValue: false,
    },
  ],
};