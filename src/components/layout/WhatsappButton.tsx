import { IoLogoWhatsapp } from "react-icons/io5";
import { me } from "../../data/data";

// Floating green WhatsApp button, bottom right on every page
const WhatsappButton = () => {
  return (
    <a
      href={me.whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed right-[max(20px,env(safe-area-inset-right))] bottom-[calc(20px+env(safe-area-inset-bottom))] z-50 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_16px_40px_rgba(0,0,0,0.4)] transition-transform duration-300 hover:scale-110 hover:-rotate-8"
    >
      <IoLogoWhatsapp size={30} />
    </a>
  );
};

export default WhatsappButton;
