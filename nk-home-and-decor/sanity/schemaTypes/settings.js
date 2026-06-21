export const settings = {
  name: 'settings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    {
      name: 'logo',
      title: 'Logo Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'logoText',
      title: 'Logo Text',
      type: 'string',
      initialValue: 'HOME AND DECOR',
    },
    {
      name: 'navLinks',
      title: 'Navigation Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'label', title: 'Label', type: 'string' },
            { name: 'url', title: 'URL', type: 'string' },
          ],
        },
      ],
    },
    {
      name: 'footerSlogan',
      title: 'Footer Slogan',
      type: 'string',
      initialValue: 'Made to Last. Designed to Impress.',
    },
    {
      name: 'headerContactHeading',
      title: 'Header Sidebar Heading',
      type: 'string',
      initialValue: 'Contact Info',
    },
    {
      name: 'footerContactHeading',
      title: 'Footer Contact Heading',
      type: 'string',
      initialValue: 'Get in touch',
    },
    {
      name: 'footerLinksHeading',
      title: 'Footer Links Heading',
      type: 'string',
      initialValue: 'Useful links',
    },
    {
      name: 'copyrightText',
      title: 'Copyright Text',
      type: 'string',
      initialValue: '© Copyright NK Home and Decor',
    },
    {
      name: 'usefulLinks',
      title: 'Useful Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'label', title: 'Label', type: 'string' },
            { name: 'url', title: 'URL', type: 'string' },
          ],
        },
      ],
    },
  ],
};
