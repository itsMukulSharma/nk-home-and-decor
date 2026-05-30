export const gallery = {
  name: 'gallery',
  title: 'Gallery Section',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Section Title',
      type: 'string',
    },
    {
      name: 'projects',
      title: 'Gallery Projects',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'project',
          fields: [
            {
              name: 'layoutType',
              title: 'Layout Type',
              type: 'number',
              description: '1 for 1 Large + 2 Small, 2 for 1 Small + 1 Large',
              options: {
                list: [
                  { title: 'Type 1 (Large Left, 2 Small Right)', value: 1 },
                  { title: 'Type 2 (Small Left, Large Right)', value: 2 },
                ],
              },
            },
            {
              name: 'items',
              title: 'Project Items',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    { name: 'title', title: 'Item Title', type: 'string' },
                    { name: 'image', title: 'Image', type: 'image', options: { hotspot: true } },
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
