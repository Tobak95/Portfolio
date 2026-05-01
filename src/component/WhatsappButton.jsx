import React from "react";
import { IoLogoWhatsapp } from "react-icons/io5";

const WhatsappButton = () => {
  return (
    <div className="layout">
      <a
        href="https://wa.me/2347038794935"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        style={{
          position: "fixed",
          bottom: "24px",
          right: "24px",
          zIndex: 9999,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#25D366",
          color: "white",
          borderRadius: "9999px",
          boxShadow: "0 16px 40px rgba(0, 0, 0, 0.18)",
        }}
      >
        <IoLogoWhatsapp size={32} />
      </a>
    </div>
  );
};

export default WhatsappButton;
