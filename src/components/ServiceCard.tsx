import { motion } from "framer-motion";
import { FiFilm, FiLayers, FiMonitor, FiRefreshCw, FiServer, FiSmartphone } from "react-icons/fi";
import type { Service } from "../data/data";

// Matches each service to an icon
const icons = {
  frontend: FiMonitor,
  backend: FiServer,
  fullstack: FiLayers,
  mobile: FiSmartphone,
  redesign: FiRefreshCw,
  motion: FiFilm,
};

// Card for one service. The icon spins and the card lifts on hover.
const ServiceCard = ({ service }: { service: Service }) => {
  const Icon = icons[service.icon];

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 250, damping: 18 }}
      className="group relative h-full overflow-hidden rounded-3xl border border-line bg-surface p-7"
    >
      {/* Coloured glow in the corner on hover */}
      <div
        className="pointer-events-none absolute -top-20 -right-20 h-48 w-48 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-40"
        style={{ background: service.color }}
      />

      <span
        className="grid h-14 w-14 place-items-center rounded-2xl text-2xl transition-transform duration-500 group-hover:rotate-[360deg]"
        style={{ background: `${service.color}1F`, color: service.color }}
      >
        <Icon />
      </span>

      <h3 className="mt-6 text-xl font-extrabold tracking-tight">{service.title}</h3>
      <p className="mt-2 text-[15px] text-muted">{service.description}</p>
    </motion.div>
  );
};

export default ServiceCard;
