import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { FiCheck } from "react-icons/fi";
import { FaGithub } from "react-icons/fa6";
import Page from "../components/layout/Page";
import PageHeader from "../components/layout/PageHeader";
import Reveal from "../components/Reveal";
import Button from "../components/Button";
import { ArrowIcon } from "../components/Icons";
import { InProgressBox, Tag } from "../components/ProjectCard";
import { projects } from "../data/data";
import { ease } from "../utils/motion";
import NotFound from "./NotFound";

const ProjectDetails = () => {
  // Read the project name from the link, e.g. /projects/eventra -> "eventra"
  const { slug } = useParams();
  const index = projects.findIndex((project) => project.slug === slug);

  // Wrong link? Show the 404 page
  if (index === -1) return <NotFound />;

  const project = projects[index];
  const nextProject = projects[(index + 1) % projects.length];

  return (
    <Page>
      <PageHeader
        title={project.title}
        crumbs={[
          { title: "Home", to: "/" },
          { title: "Projects", to: "/projects" },
          { title: project.title },
        ]}
      />

      {/* ---------- Big screenshot ---------- */}
      <section className="layout">
        <motion.div
          className="overflow-hidden rounded-[32px] border border-line bg-surface"
          initial={{ opacity: 0, y: 60, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, ease, delay: 0.6 }}
        >
          <div className="aspect-[16/9]">
            {project.image ? (
              <img src={project.image} alt={`${project.title} screenshot`} className="h-full w-full object-cover object-top" />
            ) : (
              <InProgressBox title={project.title} />
            )}
          </div>
        </motion.div>
      </section>

      {/* ---------- Story + project info ---------- */}
      <section className="layout grid gap-12 py-16 md:py-24 lg:grid-cols-[1.4fr_1fr]">
        <Reveal>
          <p className="font-mono text-xs tracking-wider text-lime">Overview</p>
          <div className="mt-4 space-y-4 text-lg text-muted md:text-xl">
            {project.description.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <p className="mt-12 font-mono text-xs tracking-wider text-lime">Highlights</p>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {project.highlights.map((item) => (
              <li key={item} className="flex items-start gap-3 rounded-2xl border border-line bg-surface p-4">
                <span
                  className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full text-ink"
                  style={{ background: project.color }}
                >
                  <FiCheck />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="rounded-3xl border border-line bg-surface p-6 lg:sticky lg:top-28">
            <p className="font-mono text-xs tracking-wider text-muted">Project info</p>
            <dl className="mt-4 divide-y divide-line">
              <InfoRow label="Year" value={project.year} />
              <InfoRow label="Role" value={project.role} />
              <InfoRow label="Type" value={<Tag color={project.color}>{project.category}</Tag>} />
            </dl>

            <div className="mt-6 flex flex-wrap gap-3">
              {project.liveLink && (
                <Button href={project.liveLink}>
                  Live demo <ArrowIcon />
                </Button>
              )}
              {project.githubLink && (
                <Button href={project.githubLink} variant="ghost">
                  <FaGithub /> GitHub
                </Button>
              )}
              {project.inProgress && <p className="text-muted">Live link coming soon.</p>}
            </div>
          </div>
        </Reveal>
      </section>

      {/* ---------- Next project ---------- */}
      <section className="layout">
        <Reveal>
          <Link
            to={`/projects/${nextProject.slug}`}
            className="group flex flex-col gap-2 border-y border-line py-10 md:flex-row md:items-center md:justify-between"
          >
            <span className="font-mono text-xs tracking-wider text-muted">Next project</span>
            <span className="font-serif text-5xl leading-none font-bold transition-colors duration-300 group-hover:text-lime md:text-7xl">
              {nextProject.title}
              <span className="ml-4 inline-block transition-transform duration-500 group-hover:translate-x-3">→</span>
            </span>
          </Link>
        </Reveal>
      </section>
    </Page>
  );
};

const InfoRow = ({ label, value }: { label: string; value: React.ReactNode }) => {
  return (
    <div className="flex items-center justify-between gap-4 py-3.5">
      <dt className="text-muted">{label}</dt>
      <dd className="text-right font-semibold">{value}</dd>
    </div>
  );
};

export default ProjectDetails;
