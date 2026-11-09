import { Link, useLocation } from "react-router-dom";
import { links, me, socials } from "../../data/data";
import Button from "../Button";
import Reveal from "../Reveal";
import { ArrowIcon, SocialIcon } from "../Icons";

const Footer = () => {
  const { pathname } = useLocation();
  const onContactPage = pathname === "/contact";

  return (
    <footer className="mt-20 border-t border-line pb-[calc(110px+env(safe-area-inset-bottom))]">
      <div className="layout">
        {/* Big call to action (hidden on the contact page, you're already there) */}
        {!onContactPage && (
          <Reveal className="flex flex-col items-start justify-between gap-8 border-b border-line py-16 md:flex-row md:items-end md:py-24">
            <div>
              <p className="font-mono text-xs tracking-wider text-lime">Have a project in mind?</p>
              <h2 className="mt-3 max-w-3xl font-serif text-5xl leading-none font-bold text-balance md:text-8xl">
                Let’s build <span className="text-lime italic">something</span> great.
              </h2>
            </div>
            <Button to="/contact">
              Hire Me <ArrowIcon />
            </Button>
          </Reveal>
        )}

        <div className="grid gap-10 py-12 md:grid-cols-3">
          <div>
            <Link to="/" className="font-serif text-3xl font-bold">
              Akinola Tobiloba
            </Link>
            <p className="mt-2 max-w-xs text-muted">
              Full-stack developer in {me.location}, building for the web and mobile.
            </p>
          </div>

          <div>
            <p className="font-mono text-xs tracking-wider text-muted">Pages</p>
            <ul className="mt-4 grid grid-cols-2 gap-2">
              {links.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="transition-colors hover:text-lime">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-xs tracking-wider text-muted">Say hello</p>
            <p className="mt-4 break-all">{me.email}</p>
            <div className="mt-4 flex gap-3">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="grid h-11 w-11 place-items-center rounded-full border border-line transition-all duration-300 hover:-translate-y-1 hover:border-lime hover:bg-lime hover:text-ink"
                >
                  <SocialIcon name={social.name} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-between gap-3 font-mono text-xs text-muted">
          <span>© {new Date().getFullYear()} Akinola Tobiloba</span>
          <span>Made with care in Lagos</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
