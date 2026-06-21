const { createClient } = require('@sanity/client');
require('dotenv').config({ path: '.env.local' });

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  token: process.env.SANITY_API_TOKEN,
  apiVersion: '2023-05-03',
  useCdn: false,
});

async function checkDocs() {
  const settings = await client.fetch('*[_type == "settings"]');
  const contact = await client.fetch('*[_type == "contact"]');
  console.log('Settings Docs:', settings.length);
  console.log('Contact Docs:', contact.length);
  if (settings.length > 0) console.log('Settings IDs:', settings.map(d => d._id));
  if (contact.length > 0) console.log('Contact IDs:', contact.map(d => d._id));
}

checkDocs();
