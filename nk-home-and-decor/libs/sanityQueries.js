export const heroQuery = `*[_type == "hero"][0]{
  title,
  subtitle,
  backgroundImage,
  ctaText,
  ctaLink
}`;

export const productsQuery = `*[_type == "product"]{
  _id,
  name,
  slug,
  description,
  price,
  images,
  category->{
    name,
    slug
  }
}`;

export const categoriesQuery = `*[_type == "category"]{
  _id,
  name,
  slug,
  description,
  image
}`;

export const servicesQuery = `*[_type == "service"]{
  _id,
  title,
  description,
  icon,
  priceRange
}`;

export const testimonialsQuery = `*[_type == "testimonial"]{
  _id,
  customerName,
  review,
  rating,
  photo
}`;

export const galleryQuery = `*[_type == "gallery"][0]{
  title,
  projects[]{
    layoutType,
    items[]{
      title,
      "img": image.asset->url
    }
  }
}`;

export const aboutQuery = `*[_type == "about"][0]{
  title,
  description,
  story,
  teamPhotos
}`;

export const contactQuery = `*[_type == "contact"][0]{
  address,
  phone,
  email,
  socialLinks
}`;

export const whyChooseUsQuery = `*[_type == "whyChooseUs"][0]{
  title,
  subtitle,
  features
}`;

export const processQuery = `*[_type == "process"][0]{
  title,
  steps[]{
    ...,
    "image": image.asset->url,
    features[]
  }
}`;

export const livspaceCalculatorQuery = `*[_type == "livspaceCalculator"][0]{
  title,
  description,
  "backgroundImage": image.asset->url,
  spaces[]{
    ...,
    steps[]{
      ...,
      options[]{
        ...,
        "image": image.asset->url
      }
    }
  }
}`;

export const announcementQuery = `*[_type == "announcement" && active == true][0]{
  text,
  link
}`;
