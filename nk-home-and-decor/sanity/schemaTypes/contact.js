export const contact = {
  name: 'contact',
  title: 'Contact Info',
  type: 'document',
  fields: [
    {
      name: 'phone',
      title: 'Primary Phone Number',
      type: 'string',
      description: 'Used for WhatsApp and click-to-call actions',
    },
    {
      name: 'email',
      title: 'Primary Email',
      type: 'string',
    },
    {
      name: 'address',
      title: 'Primary Address',
      type: 'text',
    },
    {
      name: 'contactDetails',
      title: 'Contact Details List (Footer & Sidebar)',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { 
              name: 'icon', 
              title: 'Icon', 
              type: 'string',
              options: {
                list: [
                  { title: 'Phone', value: 'Phone' },
                  { title: 'Mail', value: 'Mail' },
                  { title: 'Location', value: 'Location' },
                  { title: 'WhatsApp', value: 'WhatsApp' },
                  { title: 'Home', value: 'Home' },
                ]
              }
            },
            { name: 'text', title: 'Display Text', type: 'string' },
            { name: 'link', title: 'Link (optional)', type: 'string' },
          ]
        }
      ]
    },
    {
      name: 'socialLinks',
      title: 'Social Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { 
              name: 'platform', 
              title: 'Platform', 
              type: 'string',
              options: {
                list: [
                  { title: 'Instagram', value: 'Instagram' },
                  { title: 'WhatsApp', value: 'WhatsApp' },
                  { title: 'Facebook', value: 'Facebook' },
                  { title: 'Twitter', value: 'Twitter' },
                ]
              }
            },
            { name: 'url', title: 'URL', type: 'url' },
          ],
        },
      ],
    },
  ],
};
