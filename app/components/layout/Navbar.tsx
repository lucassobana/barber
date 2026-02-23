"use client";

import { motion } from "framer-motion";
import { SITE } from "@/app/constants/sites";

export default function Navbar() {

  const whatsappLink = `https://wa.me/${SITE.phone}?text=${encodeURIComponent(SITE.whatsappMessage)}`;

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault(); // Previne que o '#' apareça na URL
    const element = document.getElementById(id);
    if (element) {
      // Faz o scroll até o elemento com um offset (compensando a altura do navbar se necessário)
      const offset = 80; // Altura do seu navbar (h-20 = 80px)
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full bg-background/80 backdrop-blur-md z-50 border-b border-primary/10 px-6 h-20 flex items-center justify-between"
    >
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 bg-primary flex items-center justify-center rounded-lg">
          <span className="graffiti-logo text-white font-bold text-xl">LS</span>
        </div>
        <span className="graffiti-logo text-4xl md:text-5xl text-white">
          LOS SANTOS
        </span>
      </div>

      <div className="hidden md:flex items-center gap-8 uppercase text-xs font-semibold tracking-widest text-textSecondary">
        <a className="hover:text-primary transition-colors" onClick={(e) => handleScroll(e, "services")} href="#servicos">Serviços</a>
        <a className="hover:text-primary transition-colors" onClick={(e) => handleScroll(e, "drop")} href="#roupas">Streetwear</a>
        <a className="hover:text-primary transition-colors" onClick={(e) => handleScroll(e, "location")} href="#contato">Localização</a>
      </div>

      <a
        href={whatsappLink}
        className="text-sm font-bold uppercase text-primary border border-primary/30 px-4 py-2 rounded hover:bg-primary/10 transition-all"
      >
        Agendar
      </a>
    </motion.nav>
  );
}