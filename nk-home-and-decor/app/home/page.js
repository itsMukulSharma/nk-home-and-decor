import HomeContainer from "@/components/home/homeContainer";
import { client } from "@/libs/sanity";
import { 
  heroQuery, 
  servicesQuery, 
  testimonialsQuery, 
  galleryQuery, 
  aboutQuery,
  contactQuery,
  whyChooseUsQuery,
  processQuery,
  livspaceCalculatorQuery
} from "@/libs/sanityQueries";

export const revalidate = 60; // ISR revalidation every 60 seconds

const HomePage = async () => {
  let sanityData = {
    hero: null,
    services: [],
    testimonials: [],
    gallery: [],
    about: null,
    contact: null,
    whyChooseUs: null,
    process: null,
    livspaceCalculator: null
  };

  try {
    if (process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
      const [hero, services, testimonials, gallery, about, contact, whyChooseUs, process, livspaceCalculator] = await Promise.all([
        client.fetch(heroQuery),
        client.fetch(servicesQuery),
        client.fetch(testimonialsQuery),
        client.fetch(galleryQuery),
        client.fetch(aboutQuery),
        client.fetch(contactQuery),
        client.fetch(whyChooseUsQuery),
        client.fetch(processQuery),
        client.fetch(livspaceCalculatorQuery)
      ]);

      sanityData = {
        hero,
        services,
        testimonials,
        gallery,
        about,
        contact,
        whyChooseUs,
        process,
        livspaceCalculator
      };
    } else {
      console.warn("Sanity Project ID is missing. Please check your .env.local file.");
    }
  } catch (error) {
    console.error("Error fetching data from Sanity:", error);
  }

  return <HomeContainer sanityData={sanityData} />;
};

export default HomePage;
