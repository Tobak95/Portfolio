import { motion } from "framer-motion";
import Page from "../components/layout/Page";
import Hero from "../components/home/Hero";
import SkillTapes from "../components/home/SkillTapes";
import SectionTitle from "../components/SectionTitle";
import ProjectCard from "../components/ProjectCard";
import ServiceCard from "../components/ServiceCard";
import Reveal from "../components/Reveal";
import Button from "../components/Button";
import { ArrowIcon } from "../components/Icons";
import { projects, services } from "../data/data";
import { ease } from "../utils/motion";
import aboutPhoto from "../assets/bigManRemoveBg.png";

const Home = () => {
  const featuredProjects = projects.slice(0, 3);
  const featuredServices = services.slice(0, 3);

  return (
    <Page>
      <Hero />
      <SkillTapes />

      {/* ---------- Featured projects ---------- */}
      <section className="layout py-16 md:py-24">
        <Reveal>
          <SectionTitle
            label="Selected work"
            title="Things I’ve built"
            text="A few projects I’m proud of. Open any card to see the full story."
          />
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <Reveal key={project.slug} delay={index * 0.12}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 flex justify-center">
          <Button to="/projects" variant="ghost">
            See all projects <ArrowIcon />
          </Button>
        </Reveal>
      </section>

      {/* ---------- Short about ---------- */}
      <section className="layout grid items-center gap-12 py-16 md:py-24 lg:grid-cols-2">
        <Reveal className="relative mx-auto w-full max-w-md">
          <div className="relative overflow-hidden rounded-[32px] bg-[linear-gradient(160deg,#D3E97A,#4FD8C4_60%,#9D8CFF)] pt-10">
            <motion.img
              src={aboutPhoto}
              alt="Akinola Tobiloba with his hand on his chest"
              className="relative z-10 mx-auto w-[85%]"
              initial={{ y: 60 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease }}
            />
          </div>
          {/* Rotating badge */}
          <div className="absolute -right-3 -bottom-6 z-20 grid h-28 w-28 place-items-center rounded-full bg-ink sm:-right-6">
            <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full animate-spin-slow">
              <defs>
                <path id="badge-circle" d="M50 50 m-38 0 a38 38 0 1 1 76 0 a38 38 0 1 1 -76 0" />
              </defs>
              <text className="fill-lime font-mono text-[9.5px] tracking-[2px] uppercase">
                <textPath href="#badge-circle">Full-stack · Lagos · Open to work ·</textPath>
              </text>
            </svg>
            <span className="text-2xl">✦</span>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <SectionTitle label="About me" title="Frontend roots, backend muscle" />
          <div className="-mt-4 space-y-4 text-muted md:text-lg">
            <p>
              I’m a developer from Lagos with a background in Information and Communication Systems. I started out
              building interfaces, and today I work across the whole stack, from the API to the pixels.
            </p>
            <p>
              I care about accessible, user-first products that feel fast. When I’m not coding, I’m editing
              videos, playing football or taking photos.
            </p>
          </div>
          <div className="mt-8">
            <Button to="/about">
              More about me <ArrowIcon />
            </Button>
          </div>
        </Reveal>
      </section>

      {/* ---------- Services preview ---------- */}
      <section className="layout py-16 md:py-24">
        <Reveal>
          <SectionTitle label="What I do" title="Services" text="From a single landing page to a full product with its own API." />
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featuredServices.map((service, index) => (
            <Reveal key={service.title} delay={index * 0.12}>
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 flex justify-center">
          <Button to="/services" variant="ghost">
            All services <ArrowIcon />
          </Button>
        </Reveal>
      </section>
    </Page>
  );
};

export default Home;
