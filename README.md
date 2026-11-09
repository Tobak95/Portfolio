# Akinola Tobiloba · Portfolio

My personal portfolio: React + TypeScript + Vite + Tailwind CSS v4, animated with Framer Motion.

## Run it

```bash
npm install
npm run dev        # local dev server
npm run build      # type-check + production build
```

## Where things are

```
src/
  data/data.ts          <- ALL content: projects, services, skills, experience, links
  pages/                <- one file per page (Home, About, Services, Projects, ProjectDetails, Contact, NotFound)
  components/
    layout/             <- NavBar, Footer, PageHeader, Page (page transition), Background, WhatsApp button
    home/               <- Hero, HeroPortrait, Typewriter, SkillTapes
    Button.tsx          <- magnetic pill button (to="/page" or href="https://...")
    ProjectCard.tsx     <- tilting project card
    ServiceCard.tsx
    ContactForm.tsx     <- Formspree form (react-hook-form + yup)
    Reveal.tsx          <- wrap anything to make it slide in on scroll
  utils/                <- axios instance, form rules, animation easing
  index.css             <- my colours + fonts (bg-lime, text-muted, font-serif ...)
```

## Add a new project

Open `src/data/data.ts`, copy one item in the `projects` list, change the text, and import its screenshot at the top.
It automatically gets a card on the Projects page and its own page at `/projects/<slug>`.
