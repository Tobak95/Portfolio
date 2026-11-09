import Page from "../components/layout/Page";
import PageHeader from "../components/layout/PageHeader";
import ProjectCard from "../components/ProjectCard";
import Reveal from "../components/Reveal";
import { projects } from "../data/data";

const Projects = () => {
  return (
    <Page>
      <PageHeader
        title="My Projects"
        text="Websites and apps I’ve designed and built. Open any project for the full story."
        crumbs={[{ title: "Home", to: "/" }, { title: "Projects" }]}
      />

      <section className="layout pb-16 md:pb-24">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Reveal key={project.slug} delay={(index % 3) * 0.12} className="h-full">
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </section>
    </Page>
  );
};

export default Projects;
