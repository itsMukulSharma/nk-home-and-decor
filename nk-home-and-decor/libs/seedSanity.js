const { createClient } = require('@sanity/client');
const fs = require('fs');
const path = require('path');
require('dotenv').config({ path: '.env.local' });

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  token: process.env.SANITY_API_TOKEN,
  apiVersion: '2023-05-03',
  useCdn: false,
});

const uploadAsset = async (filePath) => {
  try {
    const absolutePath = path.resolve(__dirname, '..', 'public', filePath.startsWith('/') ? filePath.slice(1) : filePath);
    if (!fs.existsSync(absolutePath)) {
      console.warn(`File not found: ${absolutePath}`);
      return null;
    }
    const asset = await client.assets.upload('image', fs.createReadStream(absolutePath), {
      filename: path.basename(absolutePath),
    });
    return {
      _type: 'image',
      asset: {
        _type: 'reference',
        _ref: asset._id,
      },
    };
  } catch (err) {
    console.error(`Failed to upload asset ${filePath}:`, err.message);
    return null;
  }
};

const seedData = async () => {
  if (!process.env.SANITY_API_TOKEN || !process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
    console.error('Missing Sanity Token or Project ID in .env.local');
    return;
  }

  console.log('Seeding comprehensive data to Sanity...');

  try {
    // 1. Hero Section
    const heroBg = await uploadAsset('images/Banner_2.jpg');
    await client.createOrReplace({
      _id: 'hero-singleton',
      _type: 'hero',
      title: 'Build your vision creating reality new design',
      subtitle: 'Building in Haryana, India',
      backgroundImage: heroBg,
      ctaText: 'View Details',
      ctaLink: '#contact',
    });

    // 2. About Us
    await client.createOrReplace({
      _id: 'about-singleton',
      _type: 'about',
      title: "Discover NK's Story",
      description: 'Our journey began in May 2025 with a simple dream — to make every home feel warm, functional, and beautifully designed. What started as a small step into the world of hardware and plywood quickly grew into a passion for crafting modular kitchens, wardrobes, and TV units that match modern lifestyles.',
      story: 'Our mission is to bring smart, durable, and stylish home solutions to every household. We aim to create furniture and interiors that don’t just look good, but also make everyday living easier.',
    });

    // 3. Why Choose Us
    await client.createOrReplace({
      _id: 'whychooseus-singleton',
      _type: 'whyChooseUs',
      title: 'Designs That Inspire Living',
      subtitle: 'Our Expertise',
      features: [
        {
          title: "Modular Kitchen Solutions",
          description: "At NK HOME AND DECOR, we create modular kitchens that blend style, smart storage, and daily comfort. Every design is customized to your space using premium plywood and hardware. Our kitchens offer durability, smooth functionality, and modern aesthetics—making cooking easier and your home more beautiful.",
          icon: "Brush"
        },
        {
          title: "Luxury Wardrobe Solutions",
          description: "Our wardrobes are designed to fit your lifestyle with intelligent storage, premium materials, and beautiful finishes. From sliding to hinged designs, each wardrobe is crafted for durability and smooth use. NK HOME AND DECOR ensures maximum space utilization while adding elegance and organization to your bedroom.",
          icon: "Home"
        },
        {
          title: "Modern TV Units",
          description: "NK HOME AND DECOR creates modern TV units that enhance your living room with style and functionality. Crafted with premium plywood and hardware, our units offer organized space for gadgets and décor. Choose from floating, classic, or custom designs that add elegance and perfectly complement your interiors.",
          icon: "Dashboard"
        }
      ]
    });

    // 4. Our Process
    const step1Img = await uploadAsset('images/architecture.jpg');
    const step2Img = await uploadAsset('images/woodBox.jpg');
    const step3Img = await uploadAsset('images/livingRoom.jpg');
    const step4Img = await uploadAsset('images/modern_kitchen.jpg');

    await client.createOrReplace({
      _id: 'process-singleton',
      _type: 'process',
      title: 'Pinterest-to-Reality + 2D Design',
      steps: [
        {
          title: "Concept Lookbooks & 2D Space Planning",
          description: "We fuse your favorite Pinterest and Google design inspirations with practical engineering. Our team drafts custom, highly detailed 2D layouts and floor plans to optimize cabinet clearances, sizing, and structural parameters before layout approval.",
          image: step1Img,
          features: [
            { text: "Custom 2D Floor Plans", icon: "Brush" },
            { text: "Space Optimization", icon: "Home" }
          ]
        },
        {
          title: "Luxury Material Curation",
          description: "We guide you through hand-picking high-end custom laminates, anti-scratch acrylic finishes, and soft-close mechanisms right from our warehouse ecosystem.",
          image: step2Img,
          features: [
            { text: "Premium Laminates", icon: "Dashboard" },
            { text: "Soft-close Mechanisms", icon: "Location" }
          ]
        },
        {
          title: "On-Site Master Craftsmanship",
          description: "We deploy our trusted network of artisan carpenters straight to your site, executing millwork with precision and industrial integrity.",
          image: step3Img,
          features: [
            { text: "Artisan Carpenters", icon: "Brush" },
            { text: "Precision Execution", icon: "Home" }
          ]
        },
        {
          title: "Flawless Delivery Handover",
          description: "Comprehensive checks on soft-close systems, integrated profile accent lights, and seal integrity ensure your dream space is perfectly handed over.",
          image: step4Img,
          features: [
            { text: "Quality Checks", icon: "Dashboard" },
            { text: "Perfect Handover", icon: "Location" }
          ]
        }
      ]
    });

    // 5. Livspace Calculator
    const calcBg = await uploadAsset('images/tag-bg.jpg');
    
    // Images for calculator
    const kitchenImg1 = await uploadAsset('images/kitchen.jpg');
    const kitchenImg2 = await uploadAsset('images/kitchen.jpeg');
    const kitchenImg3 = await uploadAsset('images/modern_kitchen.jpg');
    const woodBox1 = await uploadAsset('images/woodBox.jpg');
    const woodBox2 = await uploadAsset('images/woodBoxes.jpg');
    const wardrobeImg1 = await uploadAsset('images/wardrobe.jpeg');
    const wardrobeImg2 = await uploadAsset('images/almirah.jpg');
    const tvUnitImg1 = await uploadAsset('images/tv_unit.jpg');
    const tvUnitImg2 = await uploadAsset('images/tvUnit.jpg');
    const aptImg = await uploadAsset('images/apartment.jpg');
    const lrImg = await uploadAsset('images/livingRoom.jpg');

    await client.createOrReplace({
      _id: 'livspace-calculator-singleton',
      _type: 'livspaceCalculator',
      title: 'Estimator',
      description: 'What space are we transforming today?',
      image: calcBg,
      spaces: [
        {
          id: 'kitchen',
          label: 'Modular Kitchen',
          icon: 'Brush',
          image: kitchenImg1,
          steps: [
            {
              id: 2,
              message: "Which layout matches your kitchen's blueprint?",
              field: "layout",
              options: [
                { id: "straight", label: "Straight", factor: 1.0, type: 'shape', image: kitchenImg1 },
                { id: "lshape", label: "L-Shaped", factor: 1.4, type: 'shape', image: kitchenImg2 },
                { id: "parallel", label: "Parallel", factor: 1.8, type: 'shape', image: kitchenImg3 },
                { id: "ushape", label: "U-Shaped", factor: 2.2, type: 'shape', image: kitchenImg1 },
              ]
            },
            {
              id: 3,
              message: "Select your structural core material:",
              field: "material",
              options: [
                { id: "mr", label: "Commercial MR", price: 70000, description: "Moisture Resistant", image: woodBox1 },
                { id: "bwp", label: "100% Waterproof BWP", price: 120000, description: "Marine Grade Plywood", image: woodBox2 },
                { id: "block", label: "BWP Blockboard", price: 180000, description: "Direct from Inventory", image: woodBox1 },
              ]
            },
            {
              id: 4,
              message: "Choose your exterior style and finish:",
              field: "finish",
              options: [
                { id: "matte", label: "Matte Laminate", multiplier: 1.0, image: kitchenImg3 },
                { id: "gloss", label: "High-Gloss", multiplier: 1.15, image: kitchenImg1 },
                { id: "acrylic", label: "Acrylic Finish", multiplier: 1.35, image: kitchenImg2 },
              ]
            }
          ]
        },
        {
          id: 'wardrobe',
          label: 'Master Wardrobe',
          icon: 'Home',
          image: wardrobeImg1,
          steps: [
            {
              id: 2,
              message: "Select your wardrobe layout size:",
              field: "layout",
              options: [
                { id: "2door", label: "2-Door Compact", factor: 0.8, image: wardrobeImg1 },
                { id: "3door", label: "3-Door Standard", factor: 1.1, image: wardrobeImg2 },
                { id: "4door", label: "4-Door Large", factor: 1.4, image: wardrobeImg1 },
                { id: "walkin", label: "Walk-in Wardrobe", factor: 1.9, image: wardrobeImg2 },
              ]
            },
            {
              id: 3,
              message: "Choose your door type add-on:",
              field: "doorType",
              options: [
                { id: "hinged", label: "Standard Hinged", addOn: 0, image: wardrobeImg2 },
                { id: "sliding", label: "Premium Sliding", addOn: 25000, image: wardrobeImg1 },
              ]
            },
            {
              id: 4,
              message: "Select exterior surface finish:",
              field: "finish",
              options: [
                { id: "matte", label: "Matte Laminate", multiplier: 1.0, image: wardrobeImg1 },
                { id: "gloss", label: "High-Gloss", multiplier: 1.15, image: wardrobeImg2 },
                { id: "veneer", label: "Textured Veneer", multiplier: 1.3, image: wardrobeImg1 },
              ]
            }
          ]
        },
        {
          id: 'tv',
          label: 'TV Unit',
          icon: 'Dashboard',
          image: tvUnitImg1,
          steps: [
            {
              id: 2,
              message: "Select your TV unit design profile:",
              field: "layout",
              options: [
                { id: "floating", label: "Minimalist Floating", factor: 0.5, image: tvUnitImg1 },
                { id: "wallmount", label: "Compact Wall Mount", factor: 0.8, image: tvUnitImg2 },
                { id: "full", label: "Full Luxury Backpanel", factor: 1.3, image: tvUnitImg1 },
              ]
            },
            {
              id: 3,
              message: "Choose your exterior finish type:",
              field: "finish",
              options: [
                { id: "matte", label: "Matte Laminate", multiplier: 1.0, image: tvUnitImg2 },
                { id: "charcoal", label: "Charcoal/Louvered", multiplier: 1.25, image: tvUnitImg1 },
              ]
            }
          ]
        },
        {
          id: 'vanity',
          label: 'Bathroom Vanity',
          icon: 'Location',
          image: aptImg,
          steps: [
            {
              id: 2,
              message: "Select your vanity size layout:",
              field: "layout",
              options: [
                { id: "single", label: "Single Sink 2-3ft", factor: 0.4, image: aptImg },
                { id: "double", label: "Double Sink 4-5ft", factor: 0.7, image: lrImg },
              ]
            },
            {
              id: 3,
              message: "Choose your mounting style:",
              field: "mounting",
              options: [
                { id: "wall", label: "Wall-Hung Floating", addOn: 0, image: lrImg },
                { id: "floor", label: "Floor-Standing", addOn: 10000, image: aptImg },
              ]
            }
          ]
        }
      ]
    });

    // 6. Services
    const existingServices = await client.fetch('*[_type == "service"]');
    for (const s of existingServices) {
      await client.delete(s._id);
    }

    const services = [
      {
        title: 'Architecture Design',
        img: 'images/architecture.jpg',
        description: 'Our Architecture Design collection focuses on blending timeless aesthetics with structural elegance. Each piece is thoughtfully created to complement architectural details, making your home not just a living space but a design statement.',
        keyPoints: [
          'Designs inspired by classic and modern architectural elements.',
          'Décor that enhances the flow and proportion of interiors.',
          'Use of quality woods, stones, and metals for durability and elegance.',
        ],
      },
      {
        title: 'Urban Design',
        img: 'images/urban.jpg',
        description: 'Bring the essence of city life into your home with our Urban Design collection. Blending sleek functionality with modern aesthetics, we create décor that reflects today’s fast-paced yet stylish lifestyle.',
        keyPoints: [
          'Use of industrial textures, matte tones, and metallic hints for a cosmopolitan vibe.',
          'Smart designs tailored for modern apartments and urban homes.',
          'Clean lines and striking accents for a chic, contemporary look.',
        ],
      },
      {
        title: 'Sustainable Packaging',
        img: 'images/woodBox.jpg',
        description: 'Our handcrafted wooden boxes are more than just packaging — they are a statement of elegance and care. Designed with precision and sustainability in mind, these boxes protect your products while adding a touch of sophistication.',
        keyPoints: [
          'Each box is carefully handcrafted for durability and beauty.',
          'Made from responsibly sourced wood.',
          'Tailored sizes, finishes, and engravings to match your brand or personal touch.',
        ],
      },
    ];

    for (const service of services) {
      const iconAsset = await uploadAsset(service.img);
      await client.create({
        _type: 'service',
        title: service.title,
        description: service.description,
        keyPoints: service.keyPoints,
        icon: iconAsset,
      });
    }

    // 7. Testimonials
    const existingTestimonials = await client.fetch('*[_type == "testimonial"]');
    for (const t of existingTestimonials) {
      await client.delete(t._id);
    }

    const testimonialImg = await uploadAsset('images/apartment.jpg');
    const testimonials = [
      { customerName: 'Anita Sharma', rating: 5, review: 'I purchased modular kitchen materials from here, and the quality was top-notch.' },
      { customerName: 'Rahul Mehta', rating: 4.5, review: 'Their wooden packaging boxes are sturdy and beautifully crafted.' },
      { customerName: 'Sneha Kapoor', rating: 5, review: 'I was looking for modern interior design materials, and this place had exactly what I needed.' },
    ];

    for (const t of testimonials) {
      await client.create({
        _type: 'testimonial',
        photo: testimonialImg,
        ...t,
      });
    }

    // 8. Gallery / Latest Work
    const galleryLarge1 = await uploadAsset('images/tv_unit.jpg');
    const gallerySmall1_1 = await uploadAsset('images/modern_kitchen.jpg');
    const gallerySmall1_2 = await uploadAsset('images/livingRoom.jpg');
    const galleryLarge2 = await uploadAsset('images/wardrobe.jpeg');
    const gallerySmall2 = await uploadAsset('images/woodBoxes.jpg');

    await client.createOrReplace({
      _id: 'gallery-singleton',
      _type: 'gallery',
      title: 'Latest Works',
      projects: [
        {
          layoutType: 1,
          items: [
            { title: 'Modern TV Units', image: galleryLarge1 },
            { title: 'Modular Kitchen', image: gallerySmall1_1 },
            { title: 'Luxury living room', image: gallerySmall1_2 },
          ]
        },
        {
          layoutType: 2,
          items: [
            { title: 'Luxury Wardrobe Solutions', image: galleryLarge2 },
            { title: 'Wooden packaging boxes', image: gallerySmall2 },
          ]
        }
      ]
    });

    // 9. Contact
    await client.createOrReplace({
      _id: 'contact-singleton',
      _type: 'contact',
      address: 'Gharaunda, Karnal, Haryana, 132114',
      phone: '+91 81685-19429',
      email: 'nkhomeanddecor@gmail.com',
      contactDetails: [
        { icon: 'Phone', text: '+91 81685-19429', link: 'tel:+918168519429' },
        { icon: 'WhatsApp', text: '+91 81685-19429', link: 'https://wa.me/918168519429?text=Hi%20NK%20Home%20and%20Decor...' },
        { icon: 'Mail', text: 'nkhomeanddecor@gmail.com', link: 'mailto:nkhomeanddecor@gmail.com' },
        { icon: 'Location', text: 'Gharaunda, Karnal, Haryana, 132114', link: '#' },
      ],
      socialLinks: [
        { platform: 'Instagram', url: 'https://www.instagram.com/nk_home_and_decor/?hl=en' },
        { platform: 'WhatsApp', url: 'https://wa.me/918168519429?text=Hi%20NK%20Home%20and%20Decor...' },
      ],
    });

    // 10. Site Settings
    const logoImg = await uploadAsset('images/nk_logo.png');
    await client.createOrReplace({
      _id: 'settings-singleton',
      _type: 'settings',
      logo: logoImg,
      logoText: 'HOME AND DECOR',
      navLinks: [
        { label: 'Home', url: '/' },
        { label: 'About', url: '#about' },
        { label: 'Contact', url: '#contact' },
      ],
      footerSlogan: 'Made to Last. Designed to Impress.',
      headerContactHeading: 'Contact Info',
      footerContactHeading: 'Get in touch',
      footerLinksHeading: 'Useful links',
      copyrightText: '© Copyright NK Home and Decor',
      usefulLinks: [
        { label: 'About', url: '/' },
        { label: 'Products', url: '/' },
        { label: 'Contact Us', url: '/' },
      ],
    });

    console.log('Comprehensive seeding completed successfully with assets!');
  } catch (err) {
    console.error('Seeding failed:', err.message);
  }
};

seedData();
