export const livspaceCalculator = {
  name: 'livspaceCalculator',
  title: 'Livspace Calculator Section',
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
      name: 'spaces',
      title: 'Calculator Spaces',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'space',
          fields: [
            { name: 'id', title: 'ID (e.g., kitchen)', type: 'string' },
            { name: 'label', title: 'Label', type: 'string' },
            { name: 'icon', title: 'Icon Name (e.g., Brush, Home)', type: 'string' },
            {
              name: 'steps',
              title: 'Steps',
              type: 'array',
              of: [
                {
                  type: 'object',
                  name: 'step',
                  fields: [
                    { name: 'id', title: 'Step ID (number)', type: 'number' },
                    { name: 'message', title: 'Message', type: 'string' },
                    { name: 'field', title: 'Field Name (e.g., layout, material)', type: 'string' },
                    {
                      name: 'options',
                      title: 'Options',
                      type: 'array',
                      of: [
                        {
                          type: 'object',
                          name: 'option',
                          fields: [
                            { name: 'id', title: 'Option ID', type: 'string' },
                            { name: 'label', title: 'Label', type: 'string' },
                            { name: 'description', title: 'Description', type: 'text' },
                            { name: 'image', title: 'Image', type: 'image', options: { hotspot: true } },
                            { name: 'type', title: 'Type (e.g., shape)', type: 'string' },
                            { name: 'factor', title: 'Factor (multiplier for base)', type: 'number' },
                            { name: 'price', title: 'Base Price', type: 'number' },
                            { name: 'multiplier', title: 'Multiplier', type: 'number' },
                            { name: 'addOn', title: 'Add-on Price', type: 'number' },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: 'image',
      title: 'Background Image',
      type: 'image',
      options: { hotspot: true },
    },
  ],
};
