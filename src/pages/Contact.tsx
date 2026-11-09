import { useEffect, useState } from "react";
import { FiClock, FiCopy, FiMail, FiMapPin } from "react-icons/fi";
import { IoLogoWhatsapp } from "react-icons/io5";
import Page from "../components/layout/Page";
import PageHeader from "../components/layout/PageHeader";
import ContactForm from "../components/ContactForm";
import Reveal from "../components/Reveal";
import { SocialIcon } from "../components/Icons";
import { me, socials } from "../data/data";

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const [time, setTime] = useState("");

  // Live Lagos time, so people know if I'm awake
  useEffect(() => {
    const updateTime = () => {
      const now = new Intl.DateTimeFormat("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
        timeZone: "Africa/Lagos",
      }).format(new Date());
      setTime(now);
    };
    updateTime();
    const interval = setInterval(updateTime, 15000);
    return () => clearInterval(interval);
  }, []);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(me.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error("Could not copy email:", error);
    }
  };

  return (
    <Page>
      <PageHeader
        title="Contact Me"
        text="Have a project, a job or just a question? I usually reply within a day."
        crumbs={[{ title: "Home", to: "/" }, { title: "Contact" }]}
      />

      <section className="layout grid gap-6 pb-10 lg:grid-cols-[0.85fr_1.15fr]">
        {/* ---------- Left: ways to reach me ---------- */}
        <div className="grid content-start gap-4">
          <Reveal>
            <div className="flex items-center gap-4 rounded-3xl border border-line bg-surface p-5">
              <IconBox color="#D3E97A"><FiMail /></IconBox>
              <div className="min-w-0 flex-1">
                <p className="text-sm text-muted">Email</p>
                <p className="font-semibold break-all">{me.email}</p>
              </div>
              <button
                onClick={copyEmail}
                aria-label="Copy email address"
                className="flex shrink-0 items-center gap-1.5 rounded-full border border-line px-3 py-2 text-xs font-semibold transition-colors hover:border-lime hover:text-lime"
              >
                <FiCopy /> {copied ? "Copied!" : "Copy"}
              </button>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <a
              href={me.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-3xl border border-line bg-surface p-5 transition-colors hover:border-[#25D366]"
            >
              <IconBox color="#25D366"><IoLogoWhatsapp /></IconBox>
              <div>
                <p className="text-sm text-muted">WhatsApp</p>
                <p className="font-semibold">{me.whatsapp}</p>
              </div>
            </a>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            <Reveal delay={0.16}>
              <div className="flex h-full items-center gap-4 rounded-3xl border border-line bg-surface p-5">
                <IconBox color="#9D8CFF"><FiMapPin /></IconBox>
                <div>
                  <p className="text-sm text-muted">Location</p>
                  <p className="font-semibold">{me.location}</p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="flex h-full items-center gap-4 rounded-3xl border border-line bg-surface p-5">
                <IconBox color="#FF6B57"><FiClock /></IconBox>
                <div>
                  <p className="text-sm text-muted">My time</p>
                  <p className="font-semibold">{time} WAT</p>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.32}>
            <div className="rounded-3xl border border-line bg-surface p-6">
              <h3 className="font-serif text-3xl font-bold">Follow me</h3>
              <div className="mt-4 flex gap-3">
                {socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="grid h-12 w-12 place-items-center rounded-full border border-line text-lg transition-all duration-300 hover:-translate-y-1 hover:border-lime hover:bg-lime hover:text-ink"
                  >
                    <SocialIcon name={social.name} />
                  </a>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        {/* ---------- Right: the form ---------- */}
        <Reveal delay={0.1}>
          <div className="relative overflow-hidden rounded-3xl border border-line bg-surface p-6 md:p-10">
            <div className="pointer-events-none absolute -top-40 -left-32 h-96 w-96 rounded-full bg-lime opacity-15 blur-[110px]" />
            <p className="relative font-mono text-xs tracking-wider text-lime">Get in touch</p>
            <h2 className="relative mt-3 mb-8 font-serif text-4xl leading-tight font-bold text-balance md:text-5xl">
              Got a project or need help? Let’s talk.
            </h2>
            <div className="relative">
              <ContactForm />
            </div>
          </div>
        </Reveal>
      </section>
    </Page>
  );
};

// Coloured square with an icon inside
const IconBox = ({ children, color }: { children: React.ReactNode; color: string }) => {
  return (
    <span
      className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl text-xl"
      style={{ background: `${color}1F`, color }}
    >
      {children}
    </span>
  );
};

export default Contact;
