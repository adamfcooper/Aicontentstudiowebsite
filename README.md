
  # AI Content Studio Website

  This is a code bundle for AI Content Studio Website. The original project is available at https://www.figma.com/design/0PDgmUC6Sll8d74eeo0SOO/AI-Content-Studio-Website.

  ## Running the code

  Run `npm i` to install the dependencies.

  Run `npm run dev` to start the development server.

  ## WordPress-ready structure

  The homepage marketing copy, CTA links, pricing, testimonials, and footer/navigation links now live in `src/app/data/siteContent.ts`.

  That means the current React build can stay deployed on Vercel now, and later we can map the same content model into WordPress in one of two clean ways:

  1. Build a custom WordPress theme that renders these sections from ACF or Gutenberg fields.
  2. Keep the frontend decoupled and load equivalent content from the WordPress REST API.

  The important part is that section content is no longer scattered across many components, which makes the eventual WordPress migration much simpler.
  
