# NK Home and Decor

This project is a modern web application for NK Home and Decor, built with Next.js and styled with Tailwind CSS.

## Technology Stack

- **Framework:** [Next.js 15](https://nextjs.org/) (App Router)
- **Styling:**
  - [Tailwind CSS 4](https://tailwindcss.com/)
  - [Sass (SCSS)](https://sass-lang.com/) for global and complex styles
  - [PostCSS](https://postcss.org/) for CSS transformations
- **Animations:** [GSAP (GreenSock Animation Platform)](https://gsap.com/) with `@gsap/react`
- **Forms & Validation:**
  - [Formik](https://formik.org/) for form management
  - [Yup](https://github.com/jquense/yup) for schema-based validation
- **Mailing:** [Nodemailer](https://nodemailer.com/) for server-side email handling
- **Icons:** Custom SVG icons managed in `components/icons/`
- **Slider:** [Swiper](https://swiperjs.com/) for carousels and sliders

## Project Structure

- `app/`: Next.js App Router directory containing pages, layouts, and API routes.
  - `api/sentMail/`: Endpoint for handling contact form submissions.
- `components/`: Reusable React components.
  - `home/`: Components specific to the home page (About Us, Landing Banner, etc.).
  - `layout/`: Global layout components like Header and Footer.
  - `icons/`: Centralized SVG icon components.
- `libs/`: Utility functions and shared configurations.
  - `fonts.js`: Custom local font configuration (Montserrat).
  - `formSchema.js`: Yup validation schemas.
- `public/`: Static assets including images and local fonts.

## Development Guidelines

### Styling
- Prefer Tailwind CSS utility classes for most styling needs.
- Use `app/globals.scss` for global styles and complex animations that are easier to manage in SCSS.
- The primary font is **Montserrat**, configured as a CSS variable `--font-primary`.

### Animations
- Use GSAP for high-performance animations.
- Utilize the `@gsap/react` hook for seamless integration with React's lifecycle.

### Forms
- Use Formik for handling form state and submissions.
- Define validation schemas in `libs/formSchema.js` using Yup.

### Components
- Use functional components and hooks.
- Organise components by feature or page within the `components/` directory.

### Icons
- Add new SVG icons to `components/icons/index.jsx` to keep them reusable and manageable.

## Commands

- `npm run dev`: Starts the development server with Turbopack.
- `npm run build`: Builds the application for production.
- `npm run start`: Starts the production server.
- `npm run lint`: Runs ESLint to check for code quality issues.
