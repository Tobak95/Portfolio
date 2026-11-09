import { motion } from "framer-motion";
import Page from "../components/layout/Page";
import PageHeader from "../components/layout/PageHeader";
import SectionTitle from "../components/SectionTitle";
import Reveal from "../components/Reveal";
import Button from "../components/Button";
import SkillTapes from "../components/home/SkillTapes";
import { ArrowIcon } from "../components/Icons";
import { experience, me, skillGroups } from "../data/data";
import { ease } from "../utils/motion";
import myPhoto from "../assets/laptopBoyRemoveBg.png";

const About = () => {
  return (
    <Page>
      <PageHeader
        title="About Me"
        crumbs={[{ title: "Home", to: "/" }, { title: "About" }]}
      />

      {/* ---------- Intro ---------- */}
      <section className="layout grid items-center gap-12 pb-16 lg:grid-cols-[0.9fr_1.1fr] lg:pb-24">
        <Reveal className="mx-auto w-full max-w-md">
          <div className="relative overflow-hidden rounded-[32px] border border-line bg-surface pt-12">
            {/* Big lime circle behind the photo */}
            <div className="absolute top-1/2 left-1/2 aspect-square w-[85%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime/90" />
            <motion.img
              src={myPhoto}
              alt="Akinola Tobiloba walking with a laptop bag"
              className="relative mx-auto w-[88%]"
              initial={{ y: 60 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease }}
            />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="font-mono text-xs tracking-wider text-lime">Hi, I’m Tobi</p>
          <h2 className="mt-3 font-serif text-4xl leading-tight font-bold text-balance md:text-6xl">
            I build complete products, from the database to the last pixel.
          </h2>
          <div className="mt-6 space-y-4 text-muted md:text-lg">
            <p>
              I’m a full-stack developer based in Lagos, with a background in Information and Communication
              Systems. That background gives me a user-first approach, with a strong focus on accessibility and
              inclusive design.
            </p>
            <p>
              I started as a frontend developer, building interfaces with React and SvelteKit. Today I also build
              secure backends and APIs with Node.js and TypeScript, and mobile apps with React Native.
            </p>
            <p>
              Outside of code I edit videos and create animations, play football and explore the world through
              photography.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button to="/contact">
              Hire Me <ArrowIcon />
            </Button>
            <Button href={me.cvLink} variant="ghost">
              Get Resume
            </Button>
          </div>
        </Reveal>
      </section>

      <SkillTapes />

      {/* ---------- Skills ---------- */}
      <section className="layout py-16 md:py-24">
        <Reveal>
          <SectionTitle label="My toolbox" title="Skills" text="The languages, frameworks and tools I use every day." />
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group, index) => (
            <Reveal key={group.title} delay={index * 0.1} className="h-full">
              <div className="h-full rounded-3xl border border-line bg-surface p-6">
                <div className="flex items-center gap-3">
                  <span className="h-3 w-3 rounded-full" style={{ background: group.color }} />
                  <h3 className="text-lg font-extrabold">{group.title}</h3>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{ scale: 1.08, backgroundColor: group.color, color: "#0B0B0B" }}
                      className="cursor-default rounded-full border border-line px-3.5 py-2 text-sm"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------- Experience timeline ---------- */}
      <section className="layout py-16 md:py-24">
        <Reveal>
          <SectionTitle label="Where I’ve worked" title="Experience" />
        </Reveal>

        <div className="relative">
          {/* The vertical line */}
          <motion.div
            className="absolute top-2 bottom-2 left-[7px] w-0.5 origin-top bg-gradient-to-b from-lime via-teal to-violet md:left-[calc(30%+7px)]"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.6, ease }}
          />

          <div className="space-y-10">
            {experience.map((job, index) => (
              <Reveal key={job.role + job.date} delay={index * 0.08}>
                <div className="relative grid gap-2 pl-10 md:grid-cols-[30%_1fr] md:gap-0 md:pl-0">
                  {/* Dot on the line */}
                  <span className="absolute top-1.5 left-0 h-4 w-4 rounded-full border-[3px] border-ink bg-lime md:left-[30%]" />

                  <p className="font-mono text-sm text-muted md:pr-10 md:text-right">{job.date}</p>

                  <div className="md:pl-12">
                    <h3 className="text-xl font-extrabold">{job.role}</h3>
                    <p className="mt-1 text-sm text-lime">{job.place}</p>
                    <p className="mt-3 max-w-2xl text-muted">{job.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </Page>
  );
};

export default About;
