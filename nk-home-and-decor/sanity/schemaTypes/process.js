export const process = {
  name: 'process',
  title: 'Our Process',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'steps',
      title: 'Steps',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', title: 'Title', type: 'string' },
            { name: 'description', title: 'Description', type: 'text' },
            { name: 'image', title: 'Image', type: 'image', options: { hotspot: true } },
            {
              name: 'features',
              title: 'Features (Optional List)',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    { name: 'text', title: 'Text', type: 'string' },
                    { name: 'icon', title: 'Icon Name', type: 'string' },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
