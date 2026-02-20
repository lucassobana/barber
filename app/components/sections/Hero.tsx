"use client";

import { motion } from "framer-motion";
import Button from "../ui/Button";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center px-6 relative overflow-hidden">

      <div className="max-w-xl">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl font-bold uppercase leading-tight"
        >
          CORTE QUE <br /> IMPÕE RESPEITO
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-6 text-textSecondary"
        >
          Estilo urbano. Precisão. Identidade.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-8 flex flex-col sm:flex-row gap-4"
        >
          <Button href="https://wa.me/5511999999999">
            Agendar horário
          </Button>

          <Button variant="outline" href="#roupas">
            Ver roupas
          </Button>
        </motion.div>
      </div>
    </section>
  );
}