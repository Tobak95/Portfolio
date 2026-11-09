import Page from "../components/layout/Page";
import PageHeader from "../components/layout/PageHeader";
import SectionTitle from "../components/SectionTitle";
import ServiceCard from "../components/ServiceCard";
import Reveal from "../components/Reveal";
import { services, workSteps } from "../data/data";

const Services = () => {
  return (
    <Page>
      <PageHeader
        title="My Services"
        text="I help businesses and founders turn ideas into fast, good-looking products that work on every screen."
        crumbs={[{ title: "Home", to: "/" }, { title: "Services" }]}
      />

      {/* ---------- All services ---------- */}
      <section className="layout pb-16 md:pb-24">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={(index % 3) * 0.12} className="h-full">
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------- How I work (real steps, in order) ---------- */}
      <section className="layout py-16 md:py-24">
        <Reveal>
          <SectionTitle label="How I work" title="From idea to launch" text="A simple process, so you always know what’s happening and what’s next." />
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {workSteps.map((step, index) => (
            <Reveal key={step.title} delay={index * 0.12} className="h-full">
              <div className="group h-full rounded-3xl border border-line bg-surface p-6 transition-colors duration-500 hover:border-lime">
                <span className="font-serif text-6xl leading-none font-bold text-transparent [-webkit-text-stroke:1.5px_var(--color-lime)] transition-colors duration-500 group-hover:text-lime">
                  0{index + 1}
                </span>
                <h3 className="mt-5 text-xl font-extrabold">{step.title}</h3>
                <p className="mt-2 text-[15px] text-muted">{step.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </Page>
  );
};

export default Services;
