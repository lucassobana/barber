"use client";

import { motion } from "framer-motion";
import Button from "../ui/Button";
import Image from "next/image";
import { SITE } from "@/app/constants/sites";

export default function Hero() {

  const whatsappLink = `https://wa.me/${SITE.phone}?text=${encodeURIComponent(SITE.whatsappMessage)}`;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image com Overlay do Stitch */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg.png" // Substitua pela sua imagem
          className="w-full h-full object-cover grayscale opacity-30"
          alt="Urban Barber"
          fill
        />
        <div className="absolute inset-0 bg-linear-to-b from-background/40 to-background" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.span
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="inline-block py-1 px-3 bg-primary/20 text-primary border border-primary/40 text-[10px] font-bold tracking-[0.3em] uppercase mb-6 rounded"
        >
          The New Standard
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-6xl md:text-8xl font-bold uppercase italic tracking-tighter mb-6 leading-none text-textMain"
        >
          CORTE COM <br /> <span className="text-primary">ATITUDE.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-lg text-textSecondary max-w-xl mx-auto mb-10"
        >
          Onde o estilo urbano encontra a excelência. Não é apenas um corte, é a sua identidade.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button href={whatsappLink}>Agendar Horário</Button>
          <Button variant="outline" href="#roupas">Ver Coleção</Button>
        </motion.div>
      </div>

      {/* Scroll Indicator Animado */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 text-primary/50"
      >
        ↓
      </motion.div>
    </section>
  );
}