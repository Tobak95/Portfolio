// ============================================================
// ALL MY CONTENT LIVES HERE.
// To add a project, service or job, just add one more item.
// ============================================================

import eventraImg from "../assets/eventra.png";
import torriImg from "../assets/port1.png";
import movieImg from "../assets/port2.png";
import shortlyImg from "../assets/port3.png";
import hmsImg from "../assets/HMSProject.png";

// ---------- Types (the "shape" of each item) ----------

export type NavLink = {
  title: string;
  to: string;
};

export type Project = {
  slug: string; // used in the link: /projects/eventra
  title: string;
  summary: string; // one line for the cards
  description: string[]; // paragraphs for the details page
  highlights: string[]; // bullet points for the details page
  image?: string; // optional, a project in progress may not have one yet
  year: string;
  role: string;
  category: string;
  color: string; // accent colour for the card
  liveLink?: string;
  githubLink?: string;
  inProgress?: boolean;
};

export type Service = {
  title: string;
  description: string;
  icon: "frontend" | "backend" | "fullstack" | "mobile" | "redesign" | "motion";
  color: string;
};

export type Experience = {
  role: string;
  place: string;
  date: string;
  description: string;
};

export type SkillGroup = {
  title: string;
  color: string;
  skills: string[];
};

export type Social = {
  name: "LinkedIn" | "GitHub" | "X" | "Instagram";
  link: string;
};

// ---------- Colours used for the accents ----------

export const colors = {
  lime: "#D3E97A",
  teal: "#4FD8C4",
  violet: "#9D8CFF",
  coral: "#FF6B57",
};

// ---------- Personal info ----------

export const me = {
  firstName: "Akinola",
  lastName: "Tobiloba",
  role: "Full-Stack Developer",
  location: "Lagos, Nigeria",
  email: "akinola.tobi.2010@gmail.com",
  whatsapp: "+234 703 879 4935",
  whatsappLink: "https://wa.me/2347038794935",
  cvLink: "https://drive.google.com/file/d/1lTFxrNeUpzVY_tI0GSpdXjb9fxV7xQZ-/view",
};

// Lines for the typewriter in the hero
export const typewriterLines = [
  "Full-Stack Developer.",
  "I build APIs with Node & TypeScript.",
  "I craft interfaces in React & SvelteKit.",
  "I ship mobile apps with React Native.",
  "Freelancer. Open to work.",
];

// ---------- Navigation ----------

export const links: NavLink[] = [
  { title: "Home", to: "/" },
  { title: "About", to: "/about" },
  { title: "Services", to: "/services" },
  { title: "Projects", to: "/projects" },
  { title: "Contact", to: "/contact" },
];

export const socials: Social[] = [
  { name: "LinkedIn", link: "https://www.linkedin.com/in/akinola-tobi-369762381" },
  { name: "GitHub", link: "https://github.com/Tobak95" },
  { name: "X", link: "https://x.com/TobakTobi" },
  { name: "Instagram", link: "https://www.instagram.com/tobi__tobe" },
];

// ---------- Projects ----------

export const projects: Project[] = [
  {
    slug: "royals-shades-auto",
    title: "Royals Shades Auto",
    summary: "A new project I'm building right now. Full details coming soon.",
    description: [
      "Royals Shades Auto is the project I'm currently building. I'll share the full story, screenshots and a live link here once it's ready.",
    ],
    highlights: ["Currently in development", "Case study coming soon"],
    year: "2026",
    role: "Developer",
    category: "In progress",
    color: colors.coral,
    inProgress: true,
  },
  {
    slug: "eventra",
    title: "Eventra",
    summary: "Discover, book and manage events, with a dashboard for organisers.",
    description: [
      "Eventra is a modern event management platform that makes it simple to discover, book and manage events online.",
      "Organisers can create events, track registrations and engage attendees from one dashboard, while users browse upcoming events and register in a few taps, on mobile or desktop.",
    ],
    highlights: [
      "Organiser dashboard to create and manage events",
      "Registration tracking",
      "Smooth booking flow for attendees",
      "Fully responsive on mobile and desktop",
    ],
    image: eventraImg,
    year: "2025",
    role: "Frontend Developer",
    category: "Event platform",
    color: colors.lime,
    liveLink: "https://eventra-teal.vercel.app/",
    githubLink: "https://github.com/Tobak95",
  },
  {
    slug: "hospital-management-system",
    title: "Hospital Management System",
    summary: "Role-based dashboards for admins, doctors and patients.",
    description: [
      "A web-based healthcare platform that simplifies hospital operations and improves how administrators, doctors and patients work together.",
      "It brings appointments, patient records and communication into one place, so the hospital runs its daily work faster and patients get a smooth digital experience.",
    ],
    highlights: [
      "Role-based dashboards (admin, doctor, patient)",
      "Secure authentication",
      "Appointment scheduling",
      "Patient record management",
    ],
    image: hmsImg,
    year: "2025 – 2026",
    role: "Frontend Developer",
    category: "Healthcare",
    color: colors.violet,
    liveLink: "https://kolakhospital.com.ng",
    githubLink: "https://github.com/Tobak95",
  },
  {
    slug: "torri-gate-homes",
    title: "Torri Gate Homes",
    summary: "Landlords list properties; tenants search, filter and connect.",
    description: [
      "Torri Gate Homes bridges the gap between landlords and tenants.",
      "Landlords list available properties, and tenants search, filter and connect with homes that fit their needs. The focus is simplicity, transparency and convenience, so renting feels easier and faster.",
    ],
    highlights: [
      "Property listings for landlords",
      "Search and filters for tenants",
      "Direct connection between tenants and landlords",
    ],
    image: torriImg,
    year: "2023",
    role: "Frontend Developer",
    category: "Property rentals",
    color: colors.teal,
    liveLink: "https://torii-gate-house-hunt-frontend.vercel.app/",
    githubLink: "https://github.com/Tobak95/torii-gate-house-hunt-frontend",
  },
  {
    slug: "movie-app",
    title: "My Movie App",
    summary: "Discover, rate and review films, from new releases to classics.",
    description: [
      "A platform for movie lovers to discover, rate and review films.",
      "Users explore trending releases, classics and hidden gems, and share honest opinions that help others decide what to watch next.",
    ],
    highlights: ["Trending and classic movies", "Ratings and reviews", "Responsive layout"],
    image: movieImg,
    year: "2022",
    role: "Frontend Developer",
    category: "Entertainment",
    color: colors.coral,
    liveLink: "https://movie-app-xi-seven-42.vercel.app/",
    githubLink: "https://github.com/Tobak95/Movie-App",
  },
  {
    slug: "shortly",
    title: "Shortly",
    summary: "Turns long, messy URLs into short links you can share.",
    description: [
      "Shortly is a simple, powerful tool that turns long, messy URLs into short, shareable links.",
      "It makes sharing cleaner and more professional across social media, email and everyday use.",
    ],
    highlights: ["Shorten any link instantly", "Copy with one click", "Clean, responsive design"],
    image: shortlyImg,
    year: "2022",
    role: "Frontend Developer",
    category: "Productivity tool",
    color: colors.lime,
    liveLink: "https://shortly-tobi.vercel.app/",
    githubLink: "https://github.com/Tobak95/shortly",
  },
];

// ---------- Services ----------

export const services: Service[] = [
  {
    title: "Frontend Development",
    description:
      "Fast, responsive and accessible websites and web apps built with React, SvelteKit, TypeScript and Tailwind CSS.",
    icon: "frontend",
    color: colors.lime,
  },
  {
    title: "Backend & APIs",
    description:
      "Secure REST APIs and server logic with Node.js, Express, TypeScript and MongoDB, including authentication.",
    icon: "backend",
    color: colors.teal,
  },
  {
    title: "Full-Stack Web Apps",
    description:
      "Complete products from database to interface: dashboards, booking systems and admin panels.",
    icon: "fullstack",
    color: colors.violet,
  },
  {
    title: "Mobile Apps",
    description: "Cross-platform mobile apps for Android and iOS with React Native.",
    icon: "mobile",
    color: colors.coral,
  },
  {
    title: "Website Redesign",
    description:
      "Give an old website a modern look that loads faster and works well on every screen size.",
    icon: "redesign",
    color: colors.lime,
  },
  {
    title: "Motion & Video",
    description:
      "Animations for websites, plus video editing and motion graphics for product promos and social media.",
    icon: "motion",
    color: colors.teal,
  },
];

// How I work, in order
export const workSteps = [
  { title: "Discover", text: "We talk about your goals, your users and what success looks like." },
  { title: "Plan & design", text: "I map out the pages, features and data, and agree the look with you." },
  { title: "Build", text: "I build in small steps and share progress so you can give feedback early." },
  { title: "Launch & support", text: "I deploy it, test it on real devices and stay around for fixes." },
];

// ---------- Skills ----------

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    color: colors.lime,
    skills: ["React", "SvelteKit", "TypeScript", "JavaScript", "Tailwind CSS", "HTML & CSS", "Framer Motion"],
  },
  {
    title: "Backend",
    color: colors.teal,
    skills: ["Node.js", "Express", "REST APIs", "MongoDB", "Authentication"],
  },
  {
    title: "Mobile",
    color: colors.coral,
    skills: ["React Native", "Android", "iOS"],
  },
  {
    title: "Tools",
    color: colors.violet,
    skills: ["Git & GitHub", "VS Code", "Postman", "Figma", "Vercel", "Render"],
  },
];

// Words for the scrolling strips on the home page
export const tapeOne = ["TypeScript", "Node.js", "Express", "MongoDB", "React", "SvelteKit", "React Native", "Tailwind CSS"];
export const tapeTwo = ["REST APIs", "Authentication", "Responsive UI", "Accessibility", "Animation", "Video Editing", "Git & GitHub"];

// ---------- Experience (newest first) ----------

export const experience: Experience[] = [
  {
    role: "Backend Developer",
    place: "Software company · Full-time",
    date: "Oct 2026 — Present",
    description:
      "Building secure backend services in TypeScript for a communication product, including the API behind its contacts feature.",
  },
  {
    role: "Frontend Developer",
    place: "Software company · Full-time",
    date: "2026",
    description:
      "Built product pages in SvelteKit and TypeScript from Figma designs, working closely with the design and backend teams.",
  },
  {
    role: "Frontend Developer Intern",
    place: "Tech Studio · Freelance",
    date: "Jan 2025",
    description:
      "Built responsive interfaces with HTML, CSS, JavaScript and React, implemented designs with senior developers and improved performance on mobile.",
  },
  {
    role: "Backend Training: REST APIs with Node.js",
    place: "Tech Studio Academy",
    date: "2025",
    description:
      "Learned to build and test REST APIs with Node.js: endpoints, error handling, testing and performance.",
  },
  {
    role: "Freelance Developer",
    place: "Self-employed",
    date: "2022 — Present",
    description:
      "Designing and building websites and web apps for clients and my own products.",
  },
];
